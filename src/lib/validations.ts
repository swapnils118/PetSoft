import { z } from "zod";
import { DEFAULT_PET_IMAGE } from "./constants";

export const petFormSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Name is required" }).max(20),
    ownerName: z
      .string()
      .trim()
      .min(1, { message: "Owner name is required" })
      .max(20),
    imageUrl: z.union([
      z.literal(""),
      z.string().trim().url({ message: "Image url must be a valid url" }),
    ]),
    age: z.coerce
      .number()
      .int()
      .positive()
      .max(18, { message: "Should be less than 18" }),
    notes: z.union([z.literal(""), z.string().trim().max(1000)]),
  })
  .transform((data) => ({
    ...data,
    imageUrl: data.imageUrl || DEFAULT_PET_IMAGE,
  }));

export type TPetForm = z.infer<typeof petFormSchema>;
