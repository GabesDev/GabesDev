<script lang="ts">
  import "../app.css"
  import { swipe } from "svelte-gestures"
  import { page } from "$app/stores"

  import Sidebar from "$lib/components/Sidebar.svelte"

  let toggleSidebar: any

  let handleSwipe = (e) => {
    shouldAnimateButton && toggleSidebar()
  }

  $: shouldAnimateButton = $page.route.id == "/"
</script>

<svelte:head>
  <title>GabesDev</title>
</svelte:head>

<div
  class="flex flex-row items-center justify-between h-screen bg-gray-100"
  use:swipe on:swipe={handleSwipe}
>
  <a
    href="https://www.linkedin.com/in/gabesdev"
    class="absolute z-10 p-3 w-fit rounded-xl top-5 right-5 shadow-sm-nm hover:shadow-sm-nm-pressed"
    target="_blank"
  >
    Get in touch!
  </a>

  <Sidebar {shouldAnimateButton} bind:toggle={toggleSidebar} />

  <main
    class="relative flex flex-col items-center justify-center w-full h-full"
  >
    <div class="px-4 mt-20 overflow-y-auto text-center">
      <slot />
    </div>
  </main>
</div>
