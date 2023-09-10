<script lang="ts">
    import type { GameState } from '@/game.type';
    import TheGame from '@/modules/TheGame.svelte';
    import TheModal from '@/modules/TheModal.svelte';
    import { GAMES } from '@/utils/game-data';

    let pv_game_state: GameState = 'waiting';
    let pv_the_game: TheGame;
</script>

<main class="h-screen text-white flex justify-center items-center">
    <TheGame bind:this={pv_the_game} />

    {#if pv_game_state !== 'playing'}
        <TheModal>
            <header class="flex flex-col items-center gap-2">
                <h1 class="text-4xl uppercase">MATCHING GAME</h1>
                <p
                    class="text-xl tracking-widest before:absolute relative before:w-[80%] before:h-[2px] before:bg-red-400 w-max before:-bottom-1 before:right-1/2 before:translate-x-1/2">
                    boost up your brain
                </p>
            </header>

            <main>
                {#if pv_game_state === 'won' || pv_game_state === 'lost'}
                    <p>
                        {pv_game_state === 'won' ? 'Congras ' : 'Sorry '} you {pv_game_state} , wanna
                        play again ?
                    </p>
                {:else if pv_game_state === 'paused'}
                    <p>game paused</p>
                {:else if pv_game_state === 'waiting'}
                    <p class="mb-4">please chose a game level</p>
                    {#each GAMES as game (game.label)}
                        <button
                            class="bg-cyan-800 px-3 py-1 mr-2 rounded-lg hover:bg-cyan-800/40 hover:text-orange-500"
                            on:click={() => {
                                pv_game_state = 'playing';
                                pv_the_game.play(game);
                            }}
                            >{game.label}
                        </button>
                    {/each}
                {/if}
            </main>
        </TheModal>
    {/if}
</main>
