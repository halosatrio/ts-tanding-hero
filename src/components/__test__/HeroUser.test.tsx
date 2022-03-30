import { render, screen } from "@testing-library/react";
import HeroUser from "../HeroUser";

let mockeSelectedHero = {
name: "hehe",
image: "hehe",
intelligence: 90,
strength: 90,
speed: 90,
durability: 90,
power: 90,
combat: 90,
}

describe("Hero User component", () => {
  // I want to use toBeVisible & not.toBeVisible
  // but tailwindcss cannot render the style while on test

  it("should show hero Image", () => {
    const {container} = render(<HeroUser showHeroUser={true} selectedHero={mockeSelectedHero} powerLevelUser={900} />);
    expect(container.firstChild).toHaveClass('block')
    // let heroUserElement = screen.getByTestId("hero-user")
    // expect(heroUserElement).toBeVisible()
  });

  it("should show placeholder image when hero not shown", () => {
    const {container} = render(<HeroUser showHeroUser={false} selectedHero={mockeSelectedHero} powerLevelUser={900} />);
    expect(container.firstChild).toHaveClass('hidden')
    // console.log(screen.debug())
  });
});
