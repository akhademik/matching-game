<script lang="ts">
	import GridCard from './GridCard.svelte';

	export let items_to_print: string[];
</script>

{#each items_to_print as value, index (index)}
	<GridCard {value} />
{/each}
