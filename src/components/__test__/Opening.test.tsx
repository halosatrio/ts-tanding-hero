import { render } from "@testing-library/react";
import Opening from "../Opening";

let mockHandleStart = () => {}

describe("Opening component", () => {
  it("should render opening component having given classnames", () => {
    let {container} = render(<Opening className="hehe" handleStart={mockHandleStart} />);
    expect(container.firstChild).toHaveClass('hehe')
  });
});
