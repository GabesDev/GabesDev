<script>
  import IconMenu from "~icons/fe/app-menu"
  
  import { isMenuOpen } from "$lib/stores"
</script>

<footer class="flex items-center justify-between w-full p-10 dark:bg-neutral-950 bg-neutral-200">
  <div class="flex items-center"><img src="/favicon.png" class="w-12 h-12 mr-6" alt="GabesDev" /> Gabes.Dev</div>
  <button aria-label="Open menu" class="md:hidden" on:click={() => $isMenuOpen = !$isMenuOpen}><IconMenu class="w-10 h-10 text-blue-400" /></button>
</footer>
