<script lang="ts">
  import { g_game_store } from '@/store/game-store';

  $: game_state = $g_game_store.state;
</script>

<main>
  {#if game_state === 'won' || game_state === 'lost'}
    <p>
      {game_state === 'won' ? 'Congras ' : 'Sorry '} you {game_state} , wanna play again ?
    </p>
  {:else if game_state === 'paused'}
    <p>game paused</p>
  {:else if game_state === 'waiting'}
    <p class="mb-4">please chose a game level</p>
  {/if}
  <br />
  <slot />
</main>
