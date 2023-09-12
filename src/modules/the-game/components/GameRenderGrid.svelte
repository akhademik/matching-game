<script lang="ts">
  import { g_game_store, g_use_store } from '@/store/game-store';

  import { createEventDispatcher } from 'svelte';
  import GridCard from './GridCard.svelte';

  $: items_pool = $g_game_store.itemsPool;
  $: item_found = $g_game_store.itemFound;

  const dispatch = createEventDispatcher();

  let index_itemA: number;
  let index_itemB: number;
  let timeout_id: number;

  const two_items_selected = (_item_index: number) => {
    clearTimeout(timeout_id);
    index_itemA = _item_index;
    index_itemB = -1;
  };

  const two_items_are_same = (_item_index: number) => {
    index_itemB = _item_index;

    if (items_pool[index_itemA] === items_pool[index_itemB]) {
      item_found = [...item_found, items_pool[index_itemA]];
      g_use_store.update_item_found(item_found);

      if (item_found.length === items_pool.length / 2) {
        dispatch('all-found');
      }
    } else {
      timeout_id = setTimeout(() => (index_itemA = index_itemB = -1), 1000);
    }
  };

  const handle_item_select = (_item_index: number) => {
    if (index_itemA > -1 && index_itemB > -1) {
      two_items_selected(_item_index);
    } else if (index_itemA > -1) {
      two_items_are_same(_item_index);
    } else {
      index_itemA = _item_index;
    }
  };
</script>

<ul class="grid gap-2 grid-cols-[repeat(var(--grid-size),1fr)] w-[80em]">
  {#each items_pool as item, item_index (item_index)}
    <GridCard
      {item}
      item_selected={index_itemA === item_index || index_itemB === item_index}
      item_found={item_found.includes(item)}
      on:click={() => handle_item_select(item_index)} />
  {/each}
</ul>
