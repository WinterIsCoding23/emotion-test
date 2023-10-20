import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders heading", () => {
  render(<App />);
  const heading = screen.getByRole(/heading/i);
  expect(heading).toBeInTheDocument();
});

test("renders paragraph", () => {
  render(<App />);
  const paragraph = screen.getByText(/lorem ipsum/i);
  expect(paragraph).toBeInTheDocument();
});

// fails because cannot find scrollButton-element
test("not renders scroll-button by default", () => {
  render(<App />);
  const showButton = false;
  const scrollButton = screen.getByTestId("styled-button");
  expect(showButton).toBe(false);
  expect(scrollButton).not.toBeInTheDocument();
});

test("renders score correctly dependend on useState", () => {
  render(<App />);
  const secondParagraph = screen.getByTestId(/score-paragraph/i);
  expect(secondParagraph).toBeInTheDocument();
});