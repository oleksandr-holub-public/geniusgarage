import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}
// Add comment
export function Button({
  variant = "primary",
  onClick,
  children,
}: ButtonProps) {
  const baseStyles = {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontWeight: "600",
  };
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600", // Changed blue to red
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  };

  const variantStyles = {
    primary: {
      backgroundColor: "#0070f3",
      color: "white",
    },
    secondary: {
      backgroundColor: "#f5f5f5",
      color: "#333",
      border: "1px solid #e5e7eb",
    },
  };

  return (
    <button
      onClick={onClick}
      className={variants[variant]}
      style={{ ...baseStyles, ...variantStyles[variant] }}
    >
      {children}
    </button>
  );
}
