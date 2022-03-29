import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer, { FooterProps } from "../Footer";

const MockFooter = (props: FooterProps) => {
  return (
    <BrowserRouter>
      <Footer {...props} />
    </BrowserRouter>
  );
};

describe("Footer", () => {
  it("should render Footer for about page", () => {
    render(<MockFooter isTanding={false} />);
    let toTandingLink = screen.getByText(/Back to the Match/i);
    expect(toTandingLink).toBeInTheDocument();
  });

  it("should render Footer for tanding page", () => {
    render(<MockFooter isTanding={true} />);
    let toAboutLink = screen.getByText(/Let's see how this app works/i);
    expect(toAboutLink).toBeInTheDocument();
  });
});
