import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("card component", () => {
  it("renders child content", () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>,
    );
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("applies base styles", () => {
    render(<Card>Test</Card>);
    const card = screen.getByText("Test").parentElement;

    expect(card).toHaveClass("bg-white");
    expect(card).toHaveClass("rounded-lg");
  });

  it("applies custom className", () => {
    render(<Card className="custom-class">Test</Card>);
    const card = screen.getByText("Test").parentElement;

    expect(card).toHaveClass("custom-class");
  });

  it("renders multiple children", () => {
    render(
      <Card>
        <h2>Title</h2>
        <p>Content</p>
      </Card>,
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
