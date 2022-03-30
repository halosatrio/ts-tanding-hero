import { render, screen } from "@testing-library/react";
import TabelHeroUser from "../TabelHeroUser";

let mockHeruUser = {
name: "hehe",
image: "hehe",
intelligence: 90,
strength: 90,
speed: 90,
durability: 90,
power: 90,
combat: 90,
}

let mockHandleClick = () => {}

describe("Table Hero User component", () => {
  it("should show hero Image", () => {
    const {container} = render(<TabelHeroUser
            heroUser1={mockHeruUser}
            heroUser2={mockHeruUser}
            heroUser3={mockHeruUser}
            heroUser4={mockHeruUser}
            handleClick={mockHandleClick}
            showTableHeroUser={true}
            loading={false}
          />);
  });
});
