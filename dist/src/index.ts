import { ZodSchema } from "zod";

import { fakeStudentData } from "./data/fakeData";
import { studentSchema } from "./schemas/stodent.schema";



const validateData = <T>(
  schema: ZodSchema<T>,
  data: unknown
): T => {
  return schema.parse(data);
};

try {
  const validatedStudent = validateData(
    studentSchema,
    fakeStudentData
  );

  console.log("Validated Data:");
  console.log(validatedStudent);

} catch (error) {
  console.log("Validation Error:");

  if (error instanceof Error) {
    console.log(error.message);
  }
}