import { TContactFormField } from "@/types";
import { z } from "zod";

export const CONTACT_FORM_SCHEMA = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address" })
    .trim()
    .toLowerCase(),
  phoneNo: z
    .string()
    .min(8, { message: "Phone number must be at least 8 characters long" }),
  deliveryAddress: z
    .string()
    .min(5, { message: "Phone number must be at least 5 characters long" }),
});

export const CONTACT_FORM_FIELDS: TContactFormField[] = [
  {
    formName: "name",
    formLabel: "Name",
  },
  {
    formName: "email",
    formLabel: "Email",
  },
  {
    formName: "phoneNo",
    formLabel: "Phone Number",
  },
  {
    formName: "deliveryAddress",
    formLabel: "Delivery Address",
  },
];
