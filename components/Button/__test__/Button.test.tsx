import { render, screen } from "@testing-library/react";
import Button from "..";

describe("Button", () => {
  it("should render the button with correct text", () => {
    render(<Button />);
    expect(screen.getByText("Cambiar")).toBeInTheDocument();
  });

  it("should have the correct button id", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("id", "buttonChange");
  });

  // Add more tests for any interaction behavior if needed
});
