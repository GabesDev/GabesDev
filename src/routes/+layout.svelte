<script>
  import Footer from "$lib/components/Footer.svelte"
  import Sidebar from "$lib/components/Sidebar.svelte"
  import { fly } from "svelte/transition"
  import "../app.css"

  export let data
</script>

<div
  class="flex flex-col items-center justify-center w-full h-full 2xl:px-16 2xl:py-16 bg-gradient-to-tr from-purple-900 to-blue-200"
>
  <section class="w-full dark:bg-neutral-950 bg-neutral-200 shadow-container">
    <div class="lg:flex">
      <Sidebar />

      {#key data.url}
        <div
          in:fly={{ x: -100, duration: 500, delay: 0 }}
          class="flex-1 w-full overflow-hidden"
        >
          <slot />
        </div>
      {/key}
    </div>

    <Footer />
  </section>
</div>
