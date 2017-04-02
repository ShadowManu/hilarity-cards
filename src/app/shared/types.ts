export type UID = string;

export interface Card {
  id: string;
  type: 'black' | 'white';
  text: string;
}

export interface BlackCard extends Card {
  type: 'black';
  holes: number;
}

export interface Game {
  host: UID;
  players: UID[];
  started: boolean;
  config: any; // TODO define
  rounds: Round[];
}

export interface Round {
  black: Card;
  plays: Play[];
}

export interface Play {
  player: UID;
  cards: Card[];
}
