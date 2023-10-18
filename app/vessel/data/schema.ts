import { z } from "zod"

export const vesselSchema = z.object({
  id: z.number(),
  vesselName:z.string(),
  title: z.string(),
  packageWeight: z.number(),
  label: z.string(),
  owner: z.array(z.string()),
})

export type Vessel = z.infer<typeof vesselSchema>