<script>
  //@ts-nocheck
  import { fly } from "svelte/transition"
  import { backInOut } from "svelte/easing"
  import { inview } from "svelte-inview"

  let isInView
  export let collection = []
  export let cols = 1
  export let nameOnly = false

  const handleChange = ({ detail }) => {
    isInView = detail.inView
  }

  let mousemoveHandler = (e) => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top

      card.style.setProperty("--mouse-x", `${x}px`)
      card.style.setProperty("--mouse-y", `${y}px`)
    }
  }
</script>

<div
  class="grid 2xl:grid-cols-{cols} lg:grid-cols-2 gap-1 mt-5 group"
  on:mousemove={mousemoveHandler}
  role="presentation"
  use:inview={{
    rootMargin: "-100px",
    unobserveOnEnter: true,
  }}
  on:inview_change={handleChange}
>
  {#each collection as item, index (item.name)}
    {#if isInView}
      <div
        in:fly={{
          y: 50,
          duration: 500,
          delay: 100 + 100 * index,
          easing: backInOut,
        }}
        class="relative bg-blue-400/25 dark:bg-blue-400/10 card hover:before:opacity-100 group-hover:after:opacity-100 after:z-10 after:h-full after:left-0 after:opacity-0 after:absolute after:top-0 after:transition-opacity after:w-full before:z-30 before:h-full before:left-0 before:opacity-0 before:absolute before:top-0 before:transition-opacity before:w-full"
      >
        <div
          class="relative z-20 flex dark:bg-neutral-900 bg-neutral-100 inset-px w-[calc(100%-2px)] h-[calc(100%-2px)] items-center p-1"
        >
          {#if item.icon}
            <svelte:component
              this={item.icon}
              class="w-20 h-20 m-2 mr-4 shrink-0
            {item.extraClass ? item.extraClass : ''}"
            />
          {/if}
          {#if item.image}
            <img
              src={item.image}
              class="w-20 h-20 m-2 mr-4 shrink-0"
              alt={item.name}
            />
          {/if}
          <div class="{nameOnly ? '' : 'p-2'} dark:text-white text-neutral-500">
            {#if item.name}
              <p class="{nameOnly ? 'text-lg' : 'text-2xl'} ">{item.name}</p>
            {/if}
            {#if item.level}
              <p class="text-sm"><b>Level: </b>{item.level}</p>
            {/if}
            {#if item.description}
              <p class="text-sm dark:text-neutral-300 text-neutral-400">
                {@html item.description}
              </p>
            {/if}
          </div>
        </div>
      </div>
    {:else}
      <div class="relative opacity-0">
        <div class="flex items-center">
          {#if item.icon}
            <svelte:component
              this={item.icon}
              class="w-20 h-20 p-2 mx-2 min-w-min 
        {item.extraClass ? item.extraClass : ''}"
            />
          {/if}
          <div class="p-2">
            {#if item.name}
              <p class="text-2xl">{item.name}</p>
            {/if}
            {#if item.level}
              <p class="text-sm"><b>Level: </b>{item.level}</p>
            {/if}
            {#if item.description}
              <p class="text-sm">
                {@html item.description}
              </p>
            {/if}
          </div>
        </div>
      </div>
    {/if}
  {/each}
</div>