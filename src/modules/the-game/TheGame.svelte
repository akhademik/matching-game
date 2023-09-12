<script lang="ts">
  import { g_game_store, g_use_store } from '@/store/game-store';
  import type { Level } from '@/utils/game-data';
  import { hp_randomize, hp_shuffle_items } from '@/utils/game-helper';

  import TheCountdown from '../the-countdown/TheCountdown.svelte';
  import GameRenderGrid from './components/GameRenderGrid.svelte';

  let grid_size: number;
  let is_playing: boolean;
  let game_remain_time: number;
  let GAME_DURATION: number;

  export const start = (_level: Level) => {
    grid_size = _level.size;
    game_remain_time = GAME_DURATION = _level.duration;

    const _items_size = _level.size * _level.size;
    const _items_clone = _level.emojis.slice();
    const _half_items = hp_randomize(_items_clone, _items_size / 2);
    const _items_pool = [...hp_shuffle_items(_half_items), ...hp_shuffle_items(_half_items)];

    g_use_store.update_item_found([]);
    g_use_store.update_items_pool(_items_pool);

    is_playing = true;
    resume();
  };

  export const resume = () => {
    is_playing = true;
    countdown();
    g_use_store.update_state('playing');
  };

  const countdown = () => {
    const _current_time = Date.now();
    const _remain_time = game_remain_time;

    function loop() {
      if (!is_playing) return;
      requestAnimationFrame(loop);
      game_remain_time = _remain_time - (Date.now() - _current_time);
      if (game_remain_time <= 0) {
        is_playing = false;
        g_use_store.update_state('lost');
      }
    }

    loop();
  };

  const handle_pause = () => {
    is_playing = false;
    g_use_store.update_state('paused');
  };

  const handle_found = () => {
    is_playing = false;
    setTimeout(() => {
      is_playing = false;
      g_use_store.update_state('won');
    }, 1000);
  };
</script>

<div
  style="--grid-size: {grid_size}"
  class="flex gap-4 flex-col justify-center items-center h-full text-[min(1vmin,.5em)] sm:flex-row">
  <GameRenderGrid on:all-found={handle_found} />

  {#if is_playing}
    <TheCountdown
      {game_remain_time}
      {GAME_DURATION}
      on:click={handle_pause} />
  {/if}
</div>
