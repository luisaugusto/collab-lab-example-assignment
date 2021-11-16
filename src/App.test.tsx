import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import App from "./App";
import { formatOptions } from "./formatOptions";

const checkSelectedRadio = (value: string): boolean =>
  (screen.getAllByRole("radio") as HTMLInputElement[]).every(
    (option) => option.checked === (option.value === value)
  );

describe("App.js", () => {
  it("should show correct number of format options", () => {
    render(<App />);
    expect(screen.getAllByRole("radio")).toHaveLength(formatOptions.length);
  });

  it("should be lowercase as default", () => {
    render(<App />);
    expect(checkSelectedRadio("Lower Case")).toBeTruthy();

    expect(screen.getByRole("textbox").textContent).toEqual(
      "Here is some example text."
    );

    expect(screen.getByRole("status").textContent).toEqual(
      "here is some example text."
    );
  });

  it("should change the format of the output field if I click a radio option", async () => {
    render(<App />);

    fireEvent.click(await screen.getByLabelText("Upper Case"));
    expect(checkSelectedRadio("Upper Case")).toBeTruthy();

    expect(screen.getByRole("status").textContent).toEqual(
      "HERE IS SOME EXAMPLE TEXT."
    );
  });

  it("should change text when typing", async () => {
    render(<App />);

    fireEvent.change(await screen.getByRole("textbox"), {
      target: { value: "This Is Some New Text" },
    });
    expect(screen.getByRole("textbox").textContent).toEqual(
      "This Is Some New Text"
    );

    expect(screen.getByRole("status").textContent).toEqual(
      "this is some new text"
    );
  });
});
