export interface GameStore {
  state: GameState;
  itemFound: ItemFound;
  itemsPool: ItemsPool;
}

export type GameState = 'waiting' | 'playing' | 'paused' | 'won' | 'lost';
export type ItemFound = string[];
export type ItemsPool = string[];
