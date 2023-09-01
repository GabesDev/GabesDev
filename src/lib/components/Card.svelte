<script lang="ts">
  import Modal from "./Modal.svelte"
  import IconGithub from "~icons/cib/github"

  export let name: string = ""
  export let image: string = ""
  export let tech: string = ""
  export let description: String[] = []
  export let responsibilities: String[] = []
  export let techDetails: String[] = []
  export let address: string = ""
  export let code: string = ""
  let showModal = false
</script>

<div
  class="flex flex-col p-0 overflow-hidden transition-transform duration-1000 rounded-lg md:max-w-xs shadow-nm md:hover:scale-105"
>
  <img
    src={image}
    alt={name}
    class="object-cover object-center w-full h-64 aspect-video"
  />
  <div class="flex flex-col flex-1 p-3 mt-2">
    <h2 class="text-lg font-semibold">{name}</h2>
    {#if tech}
      <p class="text-sm text-gray-400 font-extralight">{tech}</p>
    {/if}
    <ul class="my-2 text-xs">
      {#each description as item}
        <li class="list-none">{item}</li>
      {/each}
    </ul>
    <div class="flex mt-auto">
      {#if techDetails?.length > 0}
        <button
          class="inline-block p-3 my-2 bg-gray-100 rounded w-fit shadow-sm-nm hover:shadow-sm-nm-pressed"
          on:click={() => (showModal = true)}
        >
          Technical details
        </button>
        <Modal bind:showModal>
          {#if responsibilities?.length > 0}
            <h2 class="my-2 text-xl">Responsibilities:</h2>
            <ul class="my-2 text-sm">
              {#each responsibilities as item}
                <li class="list-none">{item};</li>
              {/each}
            </ul>
          {/if}
          {#if techDetails?.length > 0 && responsibilities?.length > 0}
            <hr class="h-px my-8 bg-gray-400 border-0" />
          {/if}
          {#if techDetails?.length > 0}
            <h2 class="text-xl">Tech used:</h2>
            <ul class="my-2 text-sm">
              {#each techDetails as item}
                <li class="list-none">{item};</li>
              {/each}
            </ul>
          {/if}
        </Modal>
      {/if}
      {#if code}
        <a
          href={code}
          class="flex p-3 my-2 mr-auto bg-gray-100 rounded shadow-sm-nm hover:shadow-sm-nm-pressed"
          target="_blank"
        >
          <IconGithub class="w-6 h-6 mr-2" />
          See Code
        </a>
      {/if}
      {#if address}
        <a
          href={address}
          class="inline-block p-3 my-2 ml-auto bg-gray-100 rounded shadow-sm-nm hover:shadow-sm-nm-pressed"
          target="_blank"
        >
          See live
        </a>
      {/if}
    </div>
  </div>
</div>
