type Hero = {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
};

export function calculatePowerLevel(hero: Hero | null): number {
  if (hero === null) {
    return 0;
  }
  const intelligence = hero.intelligence === null ? 0 : hero.intelligence * 50;
  const strength = hero.strength === null ? 0 : hero.strength * 30;
  const speed = hero.speed === null ? 0 : hero.speed * 30;
  const durability = hero.durability === null ? 0 : hero.durability * 20;
  const power = hero.power === null ? 0 : hero.power * 100;
  const combat = hero.combat === null ? 0 : hero.combat * 10;

  const powerLevel =
    intelligence + strength + speed + durability + power + combat;

  return powerLevel;
}
// still havent solve the error

export function bandingUserLawan(heroUser: number, heroLawan: number) {
  if (heroUser > heroLawan) {
    return "You Win!";
  } else if (heroUser < heroLawan) {
    return "You Lose!";
  } else if (heroUser === heroLawan) {
    return "Draw!";
  } else {
    return "hehehe :)";
  }
}
