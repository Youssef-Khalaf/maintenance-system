/* eslint-disable @typescript-eslint/no-unused-vars */
import { RegisterUserDto } from "@/utils/dtos";
import { registerSchema } from "@/utils/validadationSchemas";
import { NextRequest, NextResponse } from "next/server";
import Prisma from "@/utils/db";
import prisma from "@/utils/db";
import { date } from "zod";
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
    const newUser = (await prisma.employee.create({
      data: {
        id: body.id,
        name: body.name,
        password: body.password,
        phone: body.phone,
        isActive: body.isActive,
        departmentId: body.departmentId,
        jobTitleId: body.jobTitleId,
        managerID: body.managerID,
      },
    })) as RegisterUserDto;
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
