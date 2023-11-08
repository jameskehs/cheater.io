export interface Player {
  name: string;
  cards: {
    lumber: number;
    brick: number;
    wool: number;
    grain: number;
    ore: number;
  };
}
