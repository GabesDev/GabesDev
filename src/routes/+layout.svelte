<script>
  import Footer from "$lib/components/Footer.svelte"
  import Sidebar from "$lib/components/Sidebar.svelte"
  import { fly } from "svelte/transition"
  import "../app.css"

  export let data
</script>

<svelte:head>
  <title>GabesDev</title>
  <meta
    name="description"
    content="Welcome to my portfolio. Know more about my skills and get in touch!"
  />
  <meta name="theme-color" content="#030712" media="(prefers-color-scheme: dark)">
</svelte:head>

<div
  class="flex flex-col items-center justify-center w-full h-full 2xl:px-16 2xl:py-16 bg-gradient-to-tr from-purple-900 to-blue-200"
>
  <section
    class="w-full lg:flex bg-gray-950 shadow-custom"
  >
    <Sidebar />

    {#key data.url}
      <div in:fly={{ x: -100, duration: 500, delay: 0 }} class="flex-1 w-full overflow-hidden">
        <slot />
      </div>
    {/key}
  </section>

  <Footer />
</div>
