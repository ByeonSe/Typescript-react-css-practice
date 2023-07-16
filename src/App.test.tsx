import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders book title", () => {
  render(<App />);
  const mainElement = screen.getByTestId("main");
  expect(mainElement).toHaveTextContent("Run, Craig, Run");
});

test("renders book author", () => {
  render(<App />);
  const mainElement = screen.getByTestId("main");
  expect(mainElement).toHaveTextContent("Brian Nguyen");
});
