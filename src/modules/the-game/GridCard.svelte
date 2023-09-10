<script lang="ts">
    export let item: string;
    export let itemSelected: boolean;
    export let itemFound: boolean;
</script>

<div
    class="rounded-xl aspect-square w-full flex justify-center items-center square select-none"
    class:flipped={itemSelected || itemFound}>
    <button
        class="absolute inset-0 bg-slate-500 rounded-xl button z-10"
        on:click
        disabled={itemSelected || itemFound} />
    <p class="text-3xl sm:text-5xl">{item}</p>
</div>

<style>
    .square {
        transform-style: preserve-3d;
        transform: rotateY(180deg);
        transition: transform 0.4s;
    }

    .square * {
        backface-visibility: hidden;
    }

    .button {
        transform: rotateY(180deg);
    }

    .flipped {
        transform: rotateY(0);
        @apply border-orange-500 border-2;
    }
</style>
