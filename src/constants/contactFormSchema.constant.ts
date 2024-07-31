import { z } from "zod";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const CONTACT_FORM_SCHEMA = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(20, {
      message: "Name must be at most 20 characters.",
    }),
  email: z
    .string()
    .min(2, {
      message: "Email must be at least 2 characters.",
    })
    .regex(emailRegex, {
      message: "Invalid email format.",
    }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(500, {
      message: "Message must be at most 500 characters.",
    }),
});
