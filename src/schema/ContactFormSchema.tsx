import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .nonempty("Please, insert your name")
    .min(3, { message: "Is this really your name?" }),
  email: z
    .string()
    .nonempty("Please, insert your email address")
    .email("Invalid email address"),
  message: z.string().nonempty("Please, type your message"),
});

export type TContactFormValues = z.infer<typeof ContactFormSchema>;
