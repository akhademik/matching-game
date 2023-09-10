<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import GridCard from './GridCard.svelte';
    export let items_pool: string[];
    export let items_found: string[];

    let item_setA_index: number;
    let item_setB_index: number;
    let timeout_id: number;

    const dispatch = createEventDispatcher();

    const twoItemsSelected = (_item_index: number) => {
        clearTimeout(timeout_id);
        item_setA_index = _item_index;
        item_setB_index = -1;
    };

    const twoItemsAreSame = (_item_index: number) => {
        item_setB_index = _item_index;

        if (items_pool[item_setA_index] === items_pool[item_setB_index]) {
            items_found = [...items_found, items_pool[item_setA_index]];
            dispatch('found', { emoji: items_pool[item_setA_index] });
        } else {
            timeout_id = setTimeout(() => (item_setA_index = item_setB_index = -1), 1000);
        }
    };

    const handleCardClick = (_item_index: number) => {
        if (item_setA_index > -1 && item_setB_index > -1) {
            twoItemsSelected(_item_index);
        } else if (item_setA_index > -1) {
            twoItemsAreSame(_item_index);
        } else {
            item_setA_index = _item_index;
        }
    };
</script>

{#each items_pool as item, item_index (item_index)}
    <GridCard
        {item}
        itemSelected={item_setA_index === item_index || item_setB_index === item_index}
        itemFound={items_found.includes(item)}
        on:click={() => handleCardClick(item_index)} />
{/each}
