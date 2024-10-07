import { z } from "zod";

export const PRODUCT_SCHEMA = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters long" }),
  category: z
    .string({
      required_error: "Category is required",
    })
    .trim(),
  brand: z
    .string()
    .trim()
    .min(2, { message: "Brand must be at least 2 characters long" }),
  price: z.coerce
    .number()
    .nonnegative()
    .min(1, { message: "Price must be at least $1" }),
  image: z.string({
    required_error: "Image is required",
  }),
  description: z
    .string()
    .trim()
    .min(10, { message: "Description must be at least 10 characters long" }),
  quantity: z.coerce
    .number()
    .nonnegative()
    .min(0, { message: "Quantity must be at least $1" }),
  rating: z.coerce
    .number()
    .nonnegative()
    .min(0, { message: "Rating must be at least $1" }),
});
