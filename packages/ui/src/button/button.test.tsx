import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./button";
import { vi } from "vitest";

describe("Button component", () => {
  it("renders with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies primary variant by default", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-500");
  });

  it("applies secondary variant when specified", () => {
    render(<Button variant="secondary">Test</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-gray-200");
    expect(button).toHaveClass("text-gray-900");
  });

  it("", () => {
    const mockHandleClick = vi.fn();
    render(<Button onClick={mockHandleClick}>Click</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as button element", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button");
    expect(button.tagName).toBe("BUTTON");
  });
});
