<script>
  import IconMenu from "~icons/fe/app-menu"
  
  import { isMenuOpen } from "$lib/stores"
</script>

<footer class="flex items-center justify-between w-full p-10 bg-gray-950">
  <div class="flex items-center"><img src="/favicon.png" class="w-10 mr-6" alt="GabesDev" /> Gabes.Dev</div>
  <button class="md:hidden" on:click={() => $isMenuOpen = !$isMenuOpen}><IconMenu class="w-10 h-10 text-blue-400" /></button>
</footer>
