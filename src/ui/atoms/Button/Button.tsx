import React, { ReactNode } from "react";
import s from "./Button.module.css";

interface ButtonProps {
  dopeClassName?: string;
  children?: string | ReactNode | "Next";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  dopeClassName,
  children,
  disabled,
}) => {
  return (
    <button
      className={`${dopeClassName} ${
        disabled
          ? "!bg-light-gray-color !text-gray-color pointer-events-none"
          : ""
      } text-white text-[16px] font-semibold py-[9px] 
  w-[190px] h-[55px] rounded-full flex justify-center items-center gap-[12px]
  bg-purple-color hover:bg-purple-color-hover transition ease-in-out
  active:border-btn-pressed active:border-[3px] lg:bg-hero`}
    >
      {children}
    </button>
  );
};

export default Button;
