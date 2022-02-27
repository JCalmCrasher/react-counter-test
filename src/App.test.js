import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Counter", () => {
  it("should increase when the increment button in clicked", () => {
    render(<App />);

    const button = screen.getByText(/increase/i);
    fireEvent.click(button);

    const paragraph = screen.getByTestId("counter");
    expect(paragraph).toHaveTextContent(/1/i);
  });

  it("should decrease when the decrement button in clicked", () => {
    render(<App />);

    const button = screen.getByText(/decrease/i);
    const paragraph = screen.getByTestId("counter");

    fireEvent.click(button);
    expect(paragraph.textContent).toBe("-1");
  });
});
