import type { GameState, GameStore, ItemFound, ItemsPool } from '@/game.type';
import { writable, type Writable } from 'svelte/store';

export const g_game_store: Writable<GameStore> = writable({
  state: 'waiting',
  itemFound: [],
  itemsPool: []
});

export const g_use_store = {
  update_state: (_new_state: GameState) =>
    g_game_store.update(_store => ({ ..._store, state: _new_state })),
  update_items_pool: (_new_pool: ItemsPool) =>
    g_game_store.update(_store => ({ ..._store, itemsPool: _new_pool })),
  update_item_found: (_new_item_found: ItemFound) =>
    g_game_store.update(_store => ({ ..._store, itemFound: _new_item_found }))
};
