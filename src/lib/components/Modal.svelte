<script lang="ts">
  export let showModal: Boolean = false
  let dialog: HTMLDialogElement

  import IconClose from "~icons/ri/close-fill"

  $: if (dialog && showModal) dialog.showModal()
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="relative w-full max-w-lg p-10 pr-0 m-2 bg-gray-100 rounded-xl"
  >
    <button
      on:click={() => dialog.close()}
      class="absolute border-none right-2 top-2 w-fit shadow-sm-nm hover:shadow-sm-nm-pressed"
    >
      <IconClose />
    </button>
    <div class="w-full h-full max-h-[75vh] overflow-y-auto pr-10" on:click|stopPropagation>
      <slot />
    </div>
  </div>
</dialog>

<style>
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
