<script>
  import ModalIntro from './components/ModalIntro.svelte';
  import ModalLogic from './components/ModalLogic.svelte';
</script>

<div
  class="fixed grid w-full h-full left-0 top-0 backdrop-blur-md place-items-center z-[999] transition-all duration-[0.2s]">
  <section class="font-bold text-center flex flex-col gap-8">
    <ModalIntro />
    <ModalLogic>
      <slot />
    </ModalLogic>
  </section>
</div>
