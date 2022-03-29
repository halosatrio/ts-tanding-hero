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

describe("Footer", () => {
  it("should show hero Image", () => {
    render(<HeroUser showHeroUser="block" selectedHero={mockeSelectedHero} powerLevelUser={900} />);
    let heroUserElement = screen.getByTestId("hero-user")
    expect(heroUserElement).toBeVisible()
  });

  it("should show placeholder image when hero not shown", () => {
    render(<HeroUser showHeroUser="hidden" selectedHero={mockeSelectedHero} powerLevelUser={900} />);
    let heroUserElement = screen.getByTestId("hero-user")
    // expect(heroUserElement).not.toBeVisible()
    screen.debug();
  });
});
