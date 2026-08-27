import { ReactNode } from "react";

interface InputProps {
  children?: ReactNode;
  className?: string;
}

export function Input({
  children,
  className = "",
}: InputProps) {
  return <div className={className}>{children}</div>;
}
