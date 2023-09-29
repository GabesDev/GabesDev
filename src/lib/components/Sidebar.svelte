<script>
  import { page } from "$app/stores"
  import { clickOutside } from "$lib/helpers/clickOutside"
  import { isMenuOpen } from "$lib/stores"

  import IconMenu from "~icons/ri/menu-2-fill"

  import IconMastodon from "~icons/cib/mastodon"
  import IconGithub from "~icons/cib/github"
  import IconLinkedin from "~icons/cib/linkedin"
  import IconInstagram from "~icons/cib/instagram"

  import IconUser from "~icons/mdi/user"
  import IconBriefcase from "~icons/mdi/briefcase"
  import IconClose from "~icons/mdi/close"
  import IconDownload from "~icons/mingcute/download-fill"
  import IconLabs from "~icons/ri/flask-fill"

  $isMenuOpen = false

  let toggleSidebar = () => {
    $isMenuOpen = !$isMenuOpen
  }

  let handleClickOutside = () => {
    if ($isMenuOpen) toggleSidebar()
  }
</script>

{#if $isMenuOpen}
  <div class="fixed z-30 w-full h-full" />
{/if}

<aside use:clickOutside on:click_outside={handleClickOutside}>
  <button
    class="fixed z-50 w-10 p-2 border-none top-5 right-3 aspect-square lg:hidden"
    on:click={toggleSidebar}
  >
    {#if !$isMenuOpen}
      <IconMenu class="w-full h-full text-white" />
    {:else}
      <IconClose class="w-full h-full text-white" />
    {/if}
  </button>

  <section
    class="fixed z-40 h-full bg-gray-900 lg:w-96 w-[85%] lg:relative lg:-translate-x-0"
    class:-translate-x-[calc(100%+1px)]={!$isMenuOpen}
  >
    <header
      class="absolute bottom-0 flex flex-row-reverse justify-around w-full py-3 text-white lg:py-10 bg-gradient-to-t from-blue-400 to-blue-300 lg:relative lg:flex-row"
    >
      <a
        class="flex items-center justify-center"
        href="https://www.linkedin.com/in/gabesdev"
        target="_blank"
        title="LinkedIn"
      >
        <IconLinkedin class="w-8 h-8" />
      </a>
      <a
        class="flex items-center justify-center"
        href="https://github.com/gabesdev"
        target="_blank"
        title="Github"
      >
        <IconGithub class="w-8 h-8" />
      </a>
      <a
        class="flex items-center justify-center"
        href="https://instagram.com/gabbrother"
        target="_blank"
        title="Instagram"
      >
        <IconInstagram class="w-8 h-8" />
      </a>
      <a
        class="flex items-center justify-center"
        rel="me"
        href="https://mastodon.social/@gabesdev"
        target="_blank"
        title="Mastodon"
      >
        <IconMastodon class="w-8 h-8" />
      </a>
    </header>

    <section class="border-custom">
      <main class="py-10 text-center bg-gray-950/50">
        <section class="flex pl-8 lg:pl-0 lg:block">
          <img
            src="/me.jpg"
            class="w-20 mb-5 mr-5 rounded-full lg:mx-auto lg:w-40 aspect-square"
            alt="me"
          />
          <div class="text-left lg:text-center">
            <h2 class="font-medium text-blue-400 lg:text-3xl">
              Gabriel Azevedo
            </h2>
            <p class="text-white lg:text-xl">Senior FE Engineer</p>
            <p>Developing since 2013</p>
          </div>
        </section>

        <section
          class="flex items-center gap-10 pl-8 mt-5 lg:pl-0 lg:justify-center"
        >
          <a
            href="https://www.linkedin.com/in/gabesdev"
            target="_blank"
            class="px-4 py-2 text-gray-900 bg-blue-400 border-2 border-blue-400 border-solid rounded-full"
          >
            CONNECT
          </a>
        </section>
      </main>
      <nav>
        <a
          on:click={toggleSidebar}
          href="/"
          class="flex items-center p-4 pl-8 font-semibold text-gray-100 duration-500 {$page
            .url.pathname === '/'
            ? 'bg-gray-800'
            : 'bg-gray-900'}"
        >
          <IconUser class="w-8 h-8 mr-4" /> Profile
        </a>
        <a
          on:click={toggleSidebar}
          href="/portfolio"
          class="flex items-center p-4 pl-8 font-semibold text-gray-100 duration-500 {$page.url.pathname.includes(
            '/portfolio'
          )
            ? 'bg-gray-800'
            : 'bg-gray-900'}"
        >
          <IconBriefcase class="w-6 h-6 mr-4" /> Portfolio
        </a>
        <a
          on:click={toggleSidebar}
          href="/labs"
          class="flex items-center p-4 pl-8 font-semibold text-gray-100 duration-500 {$page
            .url.pathname === '/labs'
            ? 'bg-gray-800'
            : 'bg-gray-900'}"
        >
          <IconLabs class="w-6 h-6 mr-4" /> Labs
        </a>
        <a
          on:click={toggleSidebar}
          href="/[en] Gabriel Azevedo - 2023.pdf"
          target="_blank"
          download="[en] Gabriel Azevedo - 2023.pdf"
          class="flex items-center p-4 pl-8 font-semibold text-gray-100 duration-500 bg-gray-900"
        >
          <IconDownload class="w-6 h-6 mr-4" /> My CV
        </a>
      </nav>
    </section>
  </section>
</aside>
