import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "px-6 py-2 rounded-md text-md font-medium hover:opacity-80";

  const variantStyles = {
    primary: "bg-tertiary text-white",
    secondary: "bg-primary text-secondary",
    link: "bg-transparent hover:underline",
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
