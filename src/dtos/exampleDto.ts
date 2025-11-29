import { z } from "zod";

export const exampleSchema = z.object({
  message: z.string().min(1)
});

export type ExampleDto = z.infer<typeof exampleSchema>;
