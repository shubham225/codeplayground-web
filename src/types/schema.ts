import { z } from "zod";

export const questionCreationSchema = z.object({
  summery: z.string().min(5),
  description: z.string().min(10),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]),
  tags: z.string().array().optional(),
  supportedLang: z.string().array().min(1),
  codeStub: z.object({
    functionName: z.string().min(1),
    returnType: z.enum(["INT", "FLOAT", "STRING", "BOOLEAN"]),
    functionParam: z
      .object({
        type: z.enum(["INT", "FLOAT", "STRING", "BOOLEAN"]),
        name: z.string().min(1),
        isArray: z.boolean(),
      })
      .array(),
  }),
  testcases: z.string(),
  solution: z.string(),
});
