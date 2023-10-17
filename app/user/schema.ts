import { z } from "zod"

export const taskSchema = z.object({
  email:z.string(),
  username: z.string().nullable(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  bio:z.string().nullable(),
  createAt:z.string(),
  updateAt:z.string(),
  role:z.string()
})

export type Task = z.infer<typeof taskSchema>