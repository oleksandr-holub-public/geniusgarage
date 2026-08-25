import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button component", () => {
  test("renders button with click me text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
  test("renders button with bg-blue-500 class", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-500");
  });
});
