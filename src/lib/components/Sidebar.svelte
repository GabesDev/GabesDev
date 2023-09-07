<script lang="ts">
  import { page } from "$app/stores"

  import IconMastodon from "~icons/cib/mastodon"
  import IconGithub from "~icons/cib/github"
  import IconLinkedin from "~icons/cib/linkedin"
  import IconInstagram from "~icons/cib/instagram"

  import IconMenu from "~icons/ri/menu-2-fill"
  import IconClose from "~icons/ri/close-fill"
  import IconHome from "~icons/ri/home-fill"
  import IconFolder from "~icons/ri/folder-user-fill"
  import IconDownload from "~icons/ri/file-download-fill"
  import IconLabs from "~icons/ri/flask-fill"

  import me from "$lib/assets/me.jpg"
  import cv from "$lib/assets/[en] Gabriel Azevedo - 2023.pdf"
  import { clickOutside } from "$lib/helpers/clickOutside"

  let isOpen: boolean = false
  export let shouldAnimateButton: boolean = false

  export const toggle = () => (isOpen = !isOpen)

  function handleClickOutside() {
    if (isOpen) toggle()
  }
</script>

{#if !isOpen}
  <button
    class="absolute z-10 w-10 p-2 border-none top-5 left-5 aspect-square md:hidden shadow-sm-nm hover:shadow-sm-nm-pressed
    {shouldAnimateButton ? 'animate-customPulse' : ''}"
    on:click={toggle}
  >
    <IconMenu class="w-full h-full" />
  </button>
{/if}

<aside
  use:clickOutside
  on:click_outside={handleClickOutside}
  class="fixed top-0 z-20 flex flex-col flex-1 w-3/4 h-full px-5 transition-transform duration-500 ease-in-out bg-gray-100 shadow md:w-1/3 md:shadow-none md:relative md:translate-x-0"
  class:-translate-x-full={!isOpen}
>
  <button
    class="absolute w-10 border-none md:hidden top-5 right-5 aspect-square shadow-sm-nm hover:shadow-sm-nm-pressed"
    on:click={toggle}
  >
    <IconClose class="w-full h-full" />
  </button>
  <div
    class="flex items-center justify-center w-32 p-1 mx-auto my-6 overflow-hidden rounded-full md:w-48 aspect-auto shadow-nm"
  >
    <img class="rounded-full" src={me} alt="Gabriel Azevedo" />
  </div>

  <div class="space-y-5">
    <a
      class="flex items-center px-4 py-2 rounded-full hover:shadow-nm-pressed
      {$page.url.pathname === '/' ? 'shadow-nm-pressed' : 'shadow-nm'}"
      href="/"
      on:click={toggle}
    >
      <IconHome class="mr-4" /> <span>Home</span>
    </a>
    <a
      class="flex items-center px-4 py-2 rounded-full shadow-nm hover:shadow-nm-pressed"
      href={cv}
      target="_blank"
      on:click={toggle}
    >
      <IconDownload class="mr-4" /> <span>My CV</span>
    </a>
    <a
      class="flex items-center px-4 py-2 rounded-full hover:shadow-nm-pressed
      {$page.url.pathname === '/portfolio' ? 'shadow-nm-pressed' : 'shadow-nm'}"
      href="/portfolio"
      on:click={toggle}
    >
      <IconFolder class="mr-4" /> <span>Portfolio</span>
    </a>
    <a
      class="flex items-center px-4 py-2 rounded-full hover:shadow-nm-pressed
      {$page.url.pathname === '/labs' ? 'shadow-nm-pressed' : 'shadow-nm'}"
      href="/labs"
      on:click={toggle}
    >
      <IconLabs class="mr-4" /> <span>Labs</span></a
    >
  </div>

  <div class="grid grid-cols-2 gap-5 mx-auto mt-auto mb-10 justify-evenly">
    <a
      class="flex items-center justify-center"
      href="https://www.linkedin.com/in/gabesdev"
      target="_blank"
    >
      <IconLinkedin class="w-6 h-6" />
    </a>
    <a
      class="flex items-center justify-center"
      href="https://github.com/gabesdev"
      target="_blank"
    >
      <IconGithub class="w-6 h-6" />
    </a>
    <a
      class="flex items-center justify-center"
      href="https://instagram.com/gabbrother"
      target="_blank"
    >
      <IconInstagram class="w-6 h-6" />
    </a>
    <a
      class="flex items-center justify-center"
      rel="me"
      href="https://mastodon.social/@gabesdev"
      target="_blank"
    >
      <IconMastodon class="w-6 h-6" />
    </a>
  </div>
</aside>
