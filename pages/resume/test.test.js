import { render, screen } from "@testing-library/react";
import Resume from "./index";

describe("Test", () => {
  it("Hi", () => {
    render(<Resume />);

    expect(screen.getByText("Here look at my skillset")).toBeInTheDocument();
  });
});
