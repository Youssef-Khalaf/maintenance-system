import prisma from "@/utils/db";
import { JWTPayload, LoginUserDto } from "@/utils/dtos";
import { loginSchema } from "@/utils/validadationSchemas";
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";
import { generateToken } from "@/utils/generateToken";
import { serialize } from "cookie";
/**
 * @method
 * @route ~/api/Users/login
 * @description Login User [(login) / (Sign in) = (تسجيل دخول  )]
 *  @access public
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LoginUserDto;
    const validation = loginSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.errors[0].message);
    }
    const employee = await prisma.employee.findUnique({
      where: { id: body.id },
    });
    if (!employee) {
      return NextResponse.json(
        { message: "invalid Id or password" },
        { status: 400 }
      );
    }
    const compare = await bcrypt.compare(body.password, employee.password);
    if (!compare) {
      return NextResponse.json(
        { message: "invalid Id or password" },
        { status: 400 }
      );
    }
    if (!employee.isActive) {
      return NextResponse.json(
        { message: "this account is not active" },
        { status: 401 }
      );
    }
    const JWTPayload = {
      id: employee.id,
      name: employee.name,
      phone: employee.phone,
      isActive: employee.isActive,
      departmentId: employee.departmentId,
      jobTitleId: employee.jobTitleId,
      managerID: employee.managerID,
    } as JWTPayload;
    const token = generateToken(JWTPayload);

    //}); //Todo JWT token
    if (body.fromMobile) {
      return NextResponse.json(
        { message: "Authenticated", token },
        { status: 200 }
      );
    }

    const cookie = serialize("JWTToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 10,
    });

    return NextResponse.json(
      { message: "Authenticated" },
      { status: 200, headers: { "Set-Cookie": cookie } }
    );
  } catch (error) {
    if (error instanceof Error) return NextResponse.json(error.message);
  }
}
