<script lang="ts">
    import type { Game } from '@/utils/game-data';
    import { getRandomItems, shuffleItems } from '@/utils/game-helper';
    import GameRenderGrid from './the-game/GameRenderGrid.svelte';

    let grid_size: number;
    let items_pool: string[] = [];
    let items_found: string[] = [];

    export const play = (_game: Game) => {
        grid_size = _game.items;
        const _items_size = _game.items * _game.items;
        const _items_clone = _game.emojis.slice();
        const _half_of_items = getRandomItems(_items_clone, _items_size / 2);
        items_pool = [...shuffleItems(_half_of_items), ...shuffleItems(_half_of_items)];

        items_found = [];
    };
</script>

<div
    class="grid gap-2 grid-cols-[repeat(var(--grid-size),1fr)] w-[80vh] px-2"
    style="--grid-size: {grid_size}">
    <GameRenderGrid
        {items_pool}
        {items_found} />
</div>
