import { render, screen, act } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("Should render the home page", () => {
    render(<Home />);
    act(() => {
      const event = new CustomEvent("buttonClicked");
      window.dispatchEvent(event);
    });
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should render the button with the id of buttonChange", () => {
    render(<Home />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("id", "buttonChange");
  });

  it("should render content based on external event (mocked)", async () => {
    const mockEvent = new CustomEvent("buttonClicked");
    jest.spyOn(window, "dispatchEvent").mockImplementationOnce(() => true);
    render(<Home />);
    window.dispatchEvent(mockEvent);
  });
});
