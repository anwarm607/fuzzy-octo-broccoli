import React, { ReactNode } from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rightIcon: ReactNode;
}

export const Input = ({ placeholder, type, rightIcon, className }: InputProps) => {
  return (
    <div className={`${className} flex items-center bg-input_1_bg rounded-md py-3 px-5 space-x-3`}>
      {rightIcon && rightIcon}
      <input
        type={type}
        placeholder={placeholder}
        className="focus:outline-none focus:border-blue-500  font-normal placeholder-input_1_placeholder bg-transparent"
      />
    </div>
  );
};
