type Hero = {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
};

export function calculatePowerLevel(hero: Hero): number {
  const intelligence = hero.intelligence * 50 ?? 0;
  const strength = hero.strength * 30 ?? 0;
  const speed = hero.speed * 30 ?? 0;
  const durability = hero.durability * 20 ?? 0;
  const power = hero.power * 100 ?? 0;
  const combat = hero.combat * 10 ?? 0;

  const powerLevel =
    intelligence + strength + speed + durability + power + combat;

  return powerLevel;
}

export function bandingUserLawan(heroUser: number, heroLawan: number) {
  if (heroUser > heroLawan) {
    return "You Win!";
  }
  if (heroUser < heroLawan) {
    return "You Lose!";
  }
  if (heroUser === heroLawan) {
    return "Draw!";
  }
}
