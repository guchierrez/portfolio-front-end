import { UseFormRegister, FieldErrors } from "react-hook-form";

type InputName = "message";

interface IFormTextInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  inputName: InputName;
  inputPlaceholder: string;
}

export const FormTextareaInput = ({
  register,
  errors,
  inputName,
  inputPlaceholder,
}: IFormTextInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <textarea
        className={`${
          errors[inputName]
            ? "border-red-500 focus:border-red-500"
            : "focus:border-primary border-white/30"
        } outline-none focus:outline-none uppercase placeholder:tracking-widest placeholder-white/30 textarea textarea-lg resize-none bg-base-200 border-0 border-b-4 w-full rounded-none transition-all duration-500`}
        placeholder={inputPlaceholder}
        autoComplete="current-password"
        {...register(inputName)}
      />
      {errors[inputName] && (
        <p className="text-red-500 text-xs font-roboto">
          {errors[inputName]?.message?.toString()}
        </p>
      )}
    </div>
  );
};
