<script lang="ts">
  import BaseButton from '@/components/BaseButton.svelte';
  import TheGame from '@/modules/the-game/TheGame.svelte';
  import TheModal from '@/modules/the-modal/TheModal.svelte';
  import { g_game_store, g_use_store } from '@/store/game-store';
  import { LEVELS, type Level } from '@/utils/game-data';

  $: game_state = $g_game_store.state;
  let game_module: TheGame;

  const pick_a_level = (_level: Level) => {
    g_use_store.update_state('playing');
    game_module.start(_level);
  };
</script>

<main class="h-screen flex flex-row justify-center flex-nowrap">
  <TheGame bind:this={game_module} />

  {#if game_state !== 'playing'}
    <TheModal>
      {#if game_state === 'paused'}
        <BaseButton on:click={() => game_module.resume()}>resume</BaseButton>
        <BaseButton on:click={() => g_use_store.update_state('waiting')}>quit</BaseButton>
      {:else}
        {#each LEVELS as level (level.label)}
          <BaseButton on:click={() => pick_a_level(level)}>{level.label}</BaseButton>
        {/each}
      {/if}
    </TheModal>
  {/if}
</main>
