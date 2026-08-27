import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}
// Add comment 4
export function Button({
  variant = "primary",
  onClick,
  children,
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 text-base font-semibold rounded-lg border-none cursor-pointer";

  const variants = {
    primary: "bg-green-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}
