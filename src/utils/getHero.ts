import axios from "axios";

const key = process.env.REACT_APP_API_KEY;

type HeroData = {
  name: string;
  image: string;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
};

export async function fetchHero(id: number): Promise<HeroData | null> {
  try {
    const response = await axios(
      `https://www.superheroapi.com/api.php/${key}/${id}`,
      {
        method: "GET",
      }
    );
    return {
      name: response.data.name,
      image: response.data.image.url,
      intelligence: response.data.powerstats.intelligence,
      strength: response.data.powerstats.strength,
      speed: response.data.powerstats.speed,
      durability: response.data.powerstats.durability,
      power: response.data.powerstats.power,
      combat: response.data.powerstats.combat,
    };
  } catch (error) {
    console.error("Can't access api. Error: " + error);
    return null;
  }
}

export async function getHeroUser(id: number) {
  try {
    const response = await axios(
      `https://www.superheroapi.com/api.php/${key}/${id}`,
      {
        method: "GET",
      }
    );
    return {
      name: response.data.name,
      image: response.data.image.url,
      intelligence: response.data.powerstats.intelligence,
      strength: response.data.powerstats.strength,
      speed: response.data.powerstats.speed,
      durability: response.data.powerstats.durability,
      power: response.data.powerstats.power,
      combat: response.data.powerstats.combat,
    };
  } catch (error) {
    console.error("Can't access api. Error: " + error);
  }
}
