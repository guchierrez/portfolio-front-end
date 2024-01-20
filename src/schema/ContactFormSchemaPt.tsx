import { z } from "zod";

export const ContactFormSchemaPt = z.object({
  name: z
    .string()
    .nonempty("Insira seu nome")
    .min(3, { message: "Seu nome está completo?" }),
  email: z
    .string()
    .nonempty("Insira seu email")
    .email("Endereço de email inválido"),
  message: z.string().nonempty("Insira sua mensagem"),
});
