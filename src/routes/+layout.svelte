<script lang="ts">
  import Sidebar from "$lib/components/Sidebar.svelte"

  import { page } from "$app/stores"
  $: shouldAnimateButton = $page.route.id == "/"

  import "../app.css"
</script>

<svelte:head>
  <title>GabesDev</title>
</svelte:head>

<div class="flex flex-row items-center justify-between h-screen bg-gray-100">
  <a
    href="https://www.linkedin.com/in/gabesdev"
    class="absolute z-10 p-3 w-fit rounded-xl top-5 right-5 shadow-sm-nm hover:shadow-sm-nm-pressed"
    target="_blank"
  >
    Get in touch!
  </a>
  
  <Sidebar {shouldAnimateButton} />

  <main
    class="relative flex flex-col items-center justify-center w-full h-full"
  >
    <div class="px-4 mt-20 overflow-y-auto text-center">
      <slot />
    </div>
  </main>
</div>
