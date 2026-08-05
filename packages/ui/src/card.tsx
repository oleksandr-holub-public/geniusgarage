import { ReactElement } from "react";

interface CardProps {
  title?: string;
  children: string;
}

export function Card({ title, children }: CardProps) {
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
      <p style={{ color: "#666" }}>{children}</p>
    </div>
  );
}
