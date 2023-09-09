<script lang="ts">
	import type { Level } from '@/utils/gameData';
	import { get_random_items, shuffle_items } from '@/utils/gameHelper';
	import GameRenderGrid from './the-game/GameRenderGrid.svelte';

	let grid_size: number;
	let items_to_print: string[] = [];

	export const play = (level: Level) => {
		grid_size = level.items;
		const _items_size = level.items * level.items;

		const _items_clone = level.emojis.slice();
		const _half_of_items = get_random_items(_items_clone, _items_size / 2);
		items_to_print = [...shuffle_items(_half_of_items), ...shuffle_items(_half_of_items)];
	};
</script>

<div
	class="grid gap-2 grid-cols-[repeat(var(--grid-size),1fr)] w-[80vh] px-2"
	style="--grid-size: {grid_size}"
>
	<GameRenderGrid {items_to_print} />
</div>
