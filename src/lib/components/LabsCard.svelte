<script>
  import { onMount } from "svelte"
  import { backInOut } from "svelte/easing"
  import { fly } from "svelte/transition"

  export let cols = 4
  export let collection = []

  let animate = false
  onMount(() => (animate = true))
</script>

<div class="grid 2xl:grid-cols-{cols} lg:grid-cols-2 gap-8 justify-stretch">
  {#each collection as item, index (item.name)}
    {#if animate}
      <div
        in:fly={{
          y: 50,
          duration: 700,
          delay: 200 + 150 * index,
          easing: backInOut,
        }}
        class="relative flex flex-col duration-500 border border-solid border-blue-400/25 dark:bg-neutral-900 bg-neutral-100 md:hover:bg-white/10 md:hover:scale-105 md:hover:shadow-lg"
      >
        <img
          src="/labs/{item.image}"
          alt={item.name}
          class="object-cover object-center w-full h-64 p-4 aspect-video"
        />

        <div class="flex flex-col h-full p-4 dark:text-white text-neutral-600">
          <p class="text-2xl">{item.name}</p>
          <p class="text-lg">{item.tech}</p>
          <p class="text-sm dark:text-neutral-300 text-neutral-400">{@html item.description}</p>

          <div class="flex items-center justify-between pt-4 mt-auto">
            {#if item.code}
              <a
                class="p-3 border border-solid border-blue-400/25 hover:bg-slate-600/25"
                target="_blank"
                href={item.code}>See code</a
              >
            {/if}
            {#if item.address}
              <a
                class="p-3 border border-solid border-blue-400/25 hover:bg-slate-600/25"
                target="_blank"
                href={item.address}>See live</a
              >
            {/if}
          </div>
        </div>
      </div>
    {/if}
  {/each}
</div>
