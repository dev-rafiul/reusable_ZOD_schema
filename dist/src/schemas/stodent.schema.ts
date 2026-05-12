
import { z } from "zod";
import { userSchema } from "./user.schemas";

export const studentSchema = userSchema.extend({
  studentId: z.string(),
  course: z.string(),
  teacher: z.string().optional(),
});