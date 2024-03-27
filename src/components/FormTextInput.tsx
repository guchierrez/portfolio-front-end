import { UseFormRegister, FieldErrors } from "react-hook-form";
import { motion } from "framer-motion";

type InputName = "name" | "email";

interface IFormTextInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  inputName: InputName;
  inputType: string;
  inputPlaceholder: string;
}

export const FormTextInput = ({
  register,
  errors,
  inputName,
  inputType,
  inputPlaceholder,
}: IFormTextInputProps) => {
  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div variants={item} className="flex flex-col gap-1">
      <input
        className={`${
          errors[inputName]
            ? "border-red-500 focus:border-red-500"
            : "focus:border-primary"
        }   outline-none focus:outline-none placeholder-white/30 input bg-base-200 w-full rounded-none`}
        type={inputType}
        placeholder={inputPlaceholder}
        autoComplete="current-password"
        {...register(inputName)}
      />
      {errors[inputName] && (
        <p className="text-xs text-red-500 font-roboto">
          {errors[inputName]?.message?.toString()}
        </p>
      )}
    </motion.div>
  );
};
