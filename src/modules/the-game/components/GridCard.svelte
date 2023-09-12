<script lang="ts">
  export let item: string;
  export let item_selected: boolean;
  export let item_found: boolean;
</script>

<li
  class="rounded-xl w-full aspect-square flex justify-center items-center square select-none"
  class:flipped={item_selected || item_found}>
  <button
    class="absolute w-full h-full bg-slate-500 rounded-xl button z-10"
    on:click
    disabled={item_selected || item_found} />
  <p class="text-3xl sm:text-6xl">{item}</p>
</li>

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
