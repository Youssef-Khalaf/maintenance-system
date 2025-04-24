import { RegisterUserDto, JWTPayload } from "@/utils/dtos";
import { generateToken } from "@/utils/generateToken";
import { registerSchema } from "@/utils/validadationSchemas";
import { NextRequest, NextResponse } from "next/server";
import Prisma from "@/utils/db";
import prisma from "@/utils/db";
import bcrypt from "bcryptjs";
import { serialize } from "cookie";
// NextRequest, NextResponse
/**
 * @method
 * @route ~/api/Users/register
 * @description Create New User [(register) / (Sign Up) = (انشاء حساب )]
 *  @access public
 */

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RegisterUserDto;
    const validation = registerSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }
    const user = await Prisma.employee.findUnique({ where: { id: body.id } });
    if (user) {
      return NextResponse.json(
        { message: "this user already registered" },
        { status: 400 }
      );
    }
    if (body.managerID) {
      const managerExists = await prisma.employee.findUnique({
        where: { id: body.managerID },
      });

      if (!managerExists) {
        return NextResponse.json(
          { error: "Manager not found" },
          { status: 400 }
        );
      }
    }
    const hashPasswoed = await bcrypt.hash(body.password, 10);
    const newUser = (await prisma.employee.create({
      data: {
        id: body.id,
        name: body.name,
        password: hashPasswoed,
        phone: body.phone,
        isActive: body.isActive,
        departmentId: body.departmentId,
        jobTitleId: body.jobTitleId,
        managerID: body.managerID,
      },
      select: {
        id: true,
        name: true,
        phone: true,
        departmentId: true,
        jobTitleId: true,
        managerID: true,
      },
    })) as RegisterUserDto;

    const JWTPayload = {
      id: newUser.id,
      name: newUser.name,
      phone: newUser.phone,
      isActive: newUser.isActive,
      departmentId: newUser.departmentId,
      jobTitleId: newUser.jobTitleId,
      managerID: newUser.managerID,
    } as JWTPayload;
    const token = generateToken(JWTPayload);

    if (body.fromMobile) {
      return NextResponse.json({ ...newUser, token }, { status: 201 });
    }

    const cookie = serialize("JWTToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 10,
    });

    return NextResponse.json(newUser, {
      status: 201,
      headers: { "Set-Cookie": cookie },
    });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
