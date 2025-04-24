// import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/utils/db";
// import JWT from "jsonwebtoken";
// import { JWTPayload } from "@/utils/dtos";

// /**
//  * @method
//  * @route ~/api/Users/profile/[id]
//  * @description Create New User [(register) / (Sign Up) = (انشاء حساب )]
//  *  @access private ( only users himself can delete his account )
//  */

// interface props {
//   params: { id: string };
// }

// export async function DELETE(request: NextRequest, props: props) {
//   try {
//     const { id } = await props.params;
//     const employee = await prisma.employee.findUnique({
//       where: { id: id },
//     });

//     if (!employee) {
//       return NextResponse.json(
//         { message: "employee not found" },
//         { status: 404 }
//       );
//     }

//     const token = request.headers.get("Auth_TOKEN") as string;
//     if (!token) {
//       return NextResponse.json(
//         { message: "not token provided , access denied" },
//         { status: 401 }
//       );
//     }
//     const employeeFromToken = JWT.verify(
//       token,
//       process.env.SECRET_KEY as string
//     ) as JWTPayload;

//     if (employeeFromToken.id !== employee.id) {
//       return NextResponse.json(
//         { message: "only users himself can delete his account , forbidden" },
//         { status: 403 }
//       );
//     }
//     await prisma.employee.delete({ where: { id: id } });
//     return NextResponse.json(
//       { message: "your profile (account) has been deleted" },
//       { status: 200 }
//     );
//   } catch (error) {
//     if (error instanceof Error)
//       return NextResponse.json({ message: error.message }, { status: 500 });
//   }
// }
