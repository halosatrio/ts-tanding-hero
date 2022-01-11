export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// import { ids } from "../utils/ids";

// export function randomCharId(): number {
//   return ids[Math.floor(Math.random() * ids.length)];
// }
