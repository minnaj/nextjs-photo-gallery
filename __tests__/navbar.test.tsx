import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

const testTitle = "Test Title";

describe("Navbar", () => {
  it("renders a title", () => {
    render(<Navbar title={testTitle} />);

    const title = screen.getByText(testTitle);

    expect(title).toBeInTheDocument();
  });
});
