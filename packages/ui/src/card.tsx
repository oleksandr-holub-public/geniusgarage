import { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
}

export function Card({ title = "", children }: CardProps) {
  return (
    <div
      style={{
        padding: "2rem",
        border: "1px solid #e5e7eb",
        borderRadius: "0.5rem",
      }}
    >
      {title && (
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
