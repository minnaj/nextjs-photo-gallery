import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Select from "@/components/Select";

const testProps = {
  label: "Test label",
  value: "testValue",
  id: "test-select",
  options: [{ value: "testValue", label: "Test value" }],
  onChange: () => {},
};

describe("Select", () => {
  it("renders value", () => {
    render(<Select {...testProps} />);

    const value = screen.getByText(testProps.options[0].label);

    expect(value).toBeInTheDocument();
  });
});
