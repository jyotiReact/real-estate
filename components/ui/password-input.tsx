import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface PasswordInputProps {
  label?: string;
  placeholder?: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
}

export default function PasswordInput({
  label = "Password",
  placeholder = "••••••••",
  error,
  register,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative h-20 ">
      <label
        htmlFor={register.name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={register.name}
        type={showPassword ? "text" : "password"}
        {...register}
        className="w-full  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1d2f6f] pr-12"
        placeholder={placeholder}
      />
      <div
        className="absolute top-[50%]   right-3 flex items-center cursor-pointer text-gray-600"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} size="sm" />{" "}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}
