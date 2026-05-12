import { z } from "zod";
import { studentSchema } from "../schemas/stodent.schema";


export type Student = z.infer<typeof studentSchema>;