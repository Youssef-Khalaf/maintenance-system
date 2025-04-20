import prisma from "@/utils/db";
import { LoginUserDto } from "@/utils/dtos";
import { loginSchema } from "@/utils/validadationSchemas";
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";
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
    const token = null; //Todo JWT token
    return NextResponse.json(
      { message: "Authenticated", token },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) return NextResponse.json(error.message);
  }
}
