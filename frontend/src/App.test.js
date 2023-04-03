import {
  render,
  screen,
  waitForElement,
  waitFor,
} from "@testing-library/react";
import App from "./App";
import Home from "./components/Home";
import Predictions from "./components/Predictions";

test("Check Home Link Is Correct In Landing Page", () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
test("Check Home Link Is Correct In Home Page", () => {
  render(<Home />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
test("Check About Link Is Correct In Home Page", () => {
  render(<Home />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
test("Check Predictions Link Is Correct In Home Page", () => {
  render(<Home />);
  const linkElement = screen.getByText(/predictions/i);
  expect(linkElement).toBeInTheDocument();
});
test("Check Predictions Link Is Correct In Home Page", () => {
  render(<Home />);
  const linkElement = screen.getByText(/notebook/i);
  expect(linkElement).toBeInTheDocument();
});

test("Check if Events are loaded", async () => {
  render(<Home />);
  await waitFor(() => {
    expect(screen.getByText("March", { exact: false })).toBeInTheDocument();
  });
});
jest.setTimeout(15000);
test("Check if Predictions are loaded", async () => {
  render(<Predictions />);
  await waitFor(
    () => {
      expect(
        screen.getByText("03/10/2023", { exact: false })
      ).toBeInTheDocument();
    },
    { timeout: 10000 }
  );
});

