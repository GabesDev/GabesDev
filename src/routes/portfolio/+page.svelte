<script>
  //@ts-nocheck
  import { swipe } from "svelte-gestures"
  import { fly } from "svelte/transition"
  import { page } from "$app/stores"
  import { goto, afterNavigate } from "$app/navigation"
  import { projects } from "$lib/staticData"

  import IconNext from "~icons/flat-color-icons/next"
  import IconPrevious from "~icons/flat-color-icons/previous"

  import PortfolioContent from "$lib/components/PortfolioContent.svelte"

  let containerWidth
  let contentAnimation

  let slidesToShowOnHeader = 1

  let currentProjectIndex = 0
  let currentHeaderPosition = 0

  $: {
    if (containerWidth > 1375) slidesToShowOnHeader = 4
    if (containerWidth > 1000 && containerWidth <= 1375) slidesToShowOnHeader = 3
    if (containerWidth >= 720 && containerWidth <= 1000) slidesToShowOnHeader = 2
    if (containerWidth < 720) slidesToShowOnHeader = 1
  }

  // Stops the header slider from going too far (avoids empty space)
  $: lastHeaderIndex = projects.length - slidesToShowOnHeader

  // Moves the header when a slider is selected
  $: {
    currentHeaderPosition =
      currentProjectIndex >= lastHeaderIndex
        ? lastHeaderIndex
        : currentProjectIndex
  }

  let chooseContentSlider = (index) => {
    if (index < 0 || index >= projects.length) return

    contentAnimation = currentProjectIndex > index ? 1 : -1

    currentProjectIndex = index
    $page.url.searchParams.set("project", projects[index].name)
    goto(`?${$page.url.searchParams.toString()}`)
  }

  let moveHeaderPosition = (index) => {
    if (index < 0 || index > projects.length || index > lastHeaderIndex) return

    currentHeaderPosition = index
  }

  let handleButtonClick = (direction) => {
    if (slidesToShowOnHeader == 1) {
      chooseContentSlider(currentProjectIndex + direction)
    } else {
      moveHeaderPosition(currentHeaderPosition + direction)
    }
  }

  let handleSwipe = (e, selectContent = true) => {
    let directionString = e.detail.direction
    let direction = directionString == "left" ? 1 : -1

    if (selectContent == true || slidesToShowOnHeader == 1) {
      chooseContentSlider(currentProjectIndex + direction)
    } else {
      moveHeaderPosition(currentHeaderPosition + direction)
    }
  }

  afterNavigate(() => {
    let projectName = $page.url.searchParams.get("project")
    if (!projectName) return

    currentProjectIndex = projects.findIndex((x) => x.name == projectName)

    if (currentProjectIndex == -1) {
      //Doesn't exist, remove from url and load /portfolio
      $page.url.searchParams.delete("project")
      goto(`?${$page.url.searchParams.toString()}`)
      return
    }
  })
</script>

<section bind:clientWidth={containerWidth}>
  <nav
    class="flex items-center dark:bg-neutral-900 bg-neutral-100"
    use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: "pan-y" }}
    on:swipe={(e) => handleSwipe(e, false)}
  >
    <button
      aria-label="See previous projects"
      on:click={() => handleButtonClick(-1)}
      class:opacity-30={currentHeaderPosition <= 0}
      disabled={currentHeaderPosition <= 0}
    >
      <IconPrevious class="w-8 h-8 md:w-16 md:h-16" />
    </button>
    <header class="max-w-full overflow-hidden">
      <div
        class="flex duration-500"
        style="transform: translate(-{currentHeaderPosition *
          Math.floor(100/slidesToShowOnHeader)}%)"
      >
        {#each projects as project, i}
          <button
            aria-label="See this project"
            on:click={() => chooseContentSlider(i)}
            class="p-10 w-[{Math.floor(100/slidesToShowOnHeader)}%] shrink-0 {i == currentProjectIndex
              ? `relative dark:bg-white/5 bg-black/5 
              after:block after:absolute after:w-0 after:h-0 after:border-x-[10px] after:border-x-transparent after:border-b-[10px] after:bottom-0 dark:after:border-b-neutral-950 after:border-b-neutral-300
              before:block before:absolute before:-bottom-24 before:rounded-full before:w-[70%] before:shadow-darkactive before:h-20
              `
              : ''}"
          >
            <img
              src={project.logo}
              alt={project.name}
              class="w-20 h-20 mb-4 rounded-full"
            />
            <div class="text-left">
              <p class="text-xl dark:text-white text-neutral-600">{project.name}</p>
              <p class="dark:text-neutral-300 text-neutral-400">{project.position}</p>
              <p class="text-sm">{project.date}</p>
            </div>
          </button>
        {/each}
      </div>
    </header>

    <button
      aria-label="See next projects"
      on:click={() => handleButtonClick(1)}
      class:opacity-30={currentHeaderPosition >= lastHeaderIndex}
      disabled={currentHeaderPosition >= lastHeaderIndex}
    >
      <IconNext class="w-8 h-8 md:w-16 md:h-16" />
    </button>
  </nav>

  {#each projects as project, i}
    {#if i == currentProjectIndex}
      <div
        in:fly={{
          x: -500 * contentAnimation,
          duration: 200,
          opacity: 0,
          delay: 200,
        }}
        use:swipe={{
          timeframe: 300,
          minSwipeDistance: 60,
          touchAction: "pan-y",
        }}
        on:swipe={(e) => handleSwipe(e)}
      >
        <PortfolioContent {project} />
      </div>
    {/if}
  {/each}
</section>
