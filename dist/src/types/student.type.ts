import { z } from "zod";
import { studentSchema } from "../schemas/student.schema";

export type Student = z.infer<typeof studentSchema>;