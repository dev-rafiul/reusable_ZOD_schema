import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string().min(3),
  email: z.email(),
  age: z.number().min(18),
});