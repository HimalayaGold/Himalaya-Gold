import { z } from "zod";

/**
 * Contact form validation. Zod defines BOTH the runtime validation and
 * (via z.infer) the TypeScript type — one definition, no drift between
 * what we validate and what we type.
 *
 * Zod 4 API: custom messages use the `error` option (v3 used `errorMap`),
 * and email validation is the top-level z.email().
 */
export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Phone can only contain digits and + - ( )"),
  email: z.email("Please enter a valid email address"),
  message: z.string().optional(),
  consent: z.literal(true, {
    error: "Please accept the privacy policy to continue",
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;