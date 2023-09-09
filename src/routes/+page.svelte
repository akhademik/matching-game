<script lang="ts">
	import type { GameState } from '@/game.type';
	import TheGame from '@/modules/TheGame.svelte';
	import TheModal from '@/modules/TheModal.svelte';
	import { game_levels } from '@/utils/gameData';

	let game_state: GameState = 'waiting';
	let the_game: TheGame;
</script>

<main class="h-screen text-white flex justify-center items-center">
	<TheGame bind:this={the_game} />

	{#if game_state !== 'playing'}
		<TheModal>
			<header class="flex flex-col items-center gap-2">
				<h1 class="text-4xl uppercase">MATCHING GAME</h1>
				<p
					class="text-xl tracking-widest before:absolute relative before:w-[80%] before:h-[2px] before:bg-red-400 w-max before:-bottom-1 before:right-1/2 before:translate-x-1/2"
				>
					boost up your brain
				</p>
			</header>

			<main>
				{#if game_state === 'won' || game_state === 'lost'}
					<p>
						{game_state === 'won' ? 'Congras ' : 'Sorry '} you {game_state} , wanna play again ?
					</p>
				{:else if game_state === 'paused'}
					<p>game paused</p>
				{:else if game_state === 'waiting'}
					<p class="mb-4">please chose a game level</p>
					{#each game_levels as level (level.label)}
						<button
							class="bg-cyan-800 px-3 py-1 mr-2 rounded-lg hover:bg-cyan-800/40 hover:text-orange-500"
							on:click={() => {
								game_state = 'playing';
								the_game.play(level);
							}}
							>{level.label}
						</button>
					{/each}
				{/if}
			</main>
		</TheModal>
	{/if}
</main>
