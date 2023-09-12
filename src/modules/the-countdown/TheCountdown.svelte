<script lang="ts">
  export let game_remain_time: number;
  export let GAME_DURATION: number;

  $: countdown = game_remain_time / GAME_DURATION;
</script>

<div class="w-full flex justify-center items-center gap-3 sm:flex-col sm:h-[80em] sm:w-min">
  <button
    on:click
    class="text-3xl"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...$$props}
      ><path
        fill="currentColor"
        d="M9 15h2V9H9v6Zm4 0h2V9h-2v6Zm-1 7q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-1.075.225-2.113t.65-2.012l1.55 1.55q-.2.65-.313 1.287T4 12q0 3.35 2.325 5.675T12 20q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4q-.675 0-1.313.112t-1.262.313L7.9 2.9q1-.45 2-.675T12 2q2.075 0 3.9.787t3.175 2.138q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22ZM5.5 7q-.625 0-1.063-.438T4 5.5q0-.625.438-1.063T5.5 4q.625 0 1.063.438T7 5.5q0 .625-.438 1.063T5.5 7Zm.5 5q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18q-2.5 0-4.25-1.75T6 12Z" /></svg
    ></button>
  <p class="w-full rounded-lg border relative h-3 overflow-hidden sm:h-full sm:w-3 rotate-180">
    <span
      class="absolute bg-orange-300 w-[calc(100%*var(--countdown))] h-full sm:w-full sm:h-[calc(100%*var(--countdown))]"
      style="--countdown: {countdown}" />
  </p>
</div>
