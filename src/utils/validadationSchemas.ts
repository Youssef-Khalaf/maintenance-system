import { z } from "zod";
export const registerSchema = z.object({
  id: z
    .string({
      required_error: "id is required",
      invalid_type_error: "id should be text",
    })
    .max(14, { message: "id  should be equal 14 characters" })
    .min(14, { message: "id  should be equal 14 characters" })
    .regex(/^[0-9]+$/, {
      message: "The ID must contain only numbers",
    }),
  name: z
    .string({
      required_error: "name is required",
      invalid_type_error: "name should be text",
    })
    .min(2, { message: "name should be at least 2 characters" }),
  password: z.string({ required_error: "password is required" }).min(6),
  phone: z
    .string({
      required_error: "phone is required",
      invalid_type_error: "phone should be text",
    })
    .max(11, { message: "phone  should be equal 11 characters" })
    .min(11, { message: "phone  should be equal 11 characters" }),
  departmentId: z.number({
    required_error: "departmentId is required",
    invalid_type_error: "departmentId should be number",
  }),
  isActive: z.boolean({
    required_error: "isActive is required",
    invalid_type_error: "isActive should be bool",
  }),
  jobTitleId: z.number({
    required_error: "jobTitleId is required",
    invalid_type_error: "jobTitleId should be number",
  }),
  managerID: z
    .string({
      invalid_type_error: "managerID should be text",
      message: "managerID  should be valid employee ID",
    })
    .max(14, { message: "managerID  should be equal 14 characters" })
    .min(14, { message: "managerID  should be equal 14 characters" })
    .optional(),
});
export const loginSchema = z.object({
  id: z
    .string({
      required_error: "id is required",
      invalid_type_error: "id should be text",
    })
    .max(14, { message: "id  should be equal 14 characters" })
    .min(14, { message: "id  should be equal 14 characters" })
    .regex(/^[0-9]+$/, {
      message: "The ID must contain only numbers",
    }),
  password: z.string({ required_error: "password is required" }).min(6),
});
