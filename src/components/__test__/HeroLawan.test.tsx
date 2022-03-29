import { render, screen } from "@testing-library/react";
import HeroLawan from "../HeroLawan";

let mockHeroLawan = {
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
    render(<HeroLawan showHeroLawan={true} heroLawan={mockHeroLawan} powerLevelLawan={900} />);
    let heroAltImage = screen.getByAltText(mockHeroLawan.name)
    expect(heroAltImage).toBeInTheDocument();
  });

  it("should show placeholder image when hero not shown", () => {
    render(<HeroLawan showHeroLawan={false} heroLawan={mockHeroLawan} powerLevelLawan={900} />);
    let placeholderImage = screen.getByAltText("man");
    expect(placeholderImage).toBeInTheDocument();
  });
});
