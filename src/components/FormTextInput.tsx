import { UseFormRegister, FieldErrors } from "react-hook-form";

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
  return (
    <div className="flex flex-col gap-1">
      <input
        className={`${
          errors[inputName]
            ? "border-red-500 focus:border-red-500"
            : "focus:border-primary border-white/30"
        }   outline-none focus:outline-none placeholder:tracking-widest uppercase placeholder-white/30 input input-lg bg-base-200 border-0 border-b-4   w-full rounded-none transition-all duration-500`}
        type={inputType}
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
