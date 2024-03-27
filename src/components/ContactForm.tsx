import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormTextInput } from "./FormTextInput";
import { useContext } from "react";
import { MainContext } from "../provider/MainContext";
import {
  ContactFormSchema,
  TContactFormValues,
} from "../schema/ContactFormSchema";
import { FormTextareaInput } from "./FormTextareaInput";
import { ContactFormSchemaPt } from "../schema/ContactFormSchemaPt";
import { motion } from "framer-motion";

export const ContactForm = () => {
  const { sendEmail, translation } = useContext(MainContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TContactFormValues>({
    resolver: translation
      ? zodResolver(ContactFormSchemaPt)
      : zodResolver(ContactFormSchema),
  });

  const submit = (formData: TContactFormValues) => {
    sendEmail(formData);
    reset();
  };

  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <form
      noValidate
      className="flex flex-col self-center w-full gap-5 lg:max-w-sm"
      onSubmit={handleSubmit(submit)}
    >
      <motion.h1
        variants={item}
        className="w-2/3 mx-auto text-xl tracking-widest text-center text-primary"
      >
        {translation ? "Entre em contato!" : "Get in touch!"}
      </motion.h1>
      <FormTextInput
        register={register}
        errors={errors}
        inputName="name"
        inputType="text"
        inputPlaceholder={translation ? "Nome" : "Name"}
      />
      <FormTextInput
        register={register}
        errors={errors}
        inputName="email"
        inputType="text"
        inputPlaceholder="Email"
      />
      <FormTextareaInput
        register={register}
        errors={errors}
        inputName="message"
        inputPlaceholder={translation ? "Mensagem" : "Message"}
      />
      <motion.button
        variants={item}
        className="w-1/2 mx-auto my-4 tracking-widest rounded-none btn btn-primary"
      >
        {translation ? "Enviar" : "Send"}
      </motion.button>
    </form>
  );
};
