<script>
  import Cards from "$lib/components/Cards.svelte"
  export let project
</script>

<main class="relative px-10 py-10 shadow-inner dark:darkshadow-inner dark:bg-neutral-900 bg-neutral-100">
  <h1 class="mt-10 mb-5 text-2xl text-blue-400">About the project</h1>
  <div class="max-w-6xl">
    {#each project.content.about as p}
      <p>{p}</p>
    {/each}
  </div>
  <h2 class="mb-5 text-2xl text-blue-400 mt-14">Responsibilities</h2>
  <ul class="list-disc">
    {#each project.content.responsibilities as li}
      <li class="p-1">{li};</li>
    {/each}
  </ul>
  <div class="grid gap-8 my-10 lg:grid-cols-3">
    {#each project.content.images as img}
      <figure class="w-full lg:w-fit">
        <img
          src={img.url}
          class="object-cover md:object-contain md:h-96
          {img.mobile ? '' : 'md:aspect-video'}"
          alt={img.title}
        />
        <figcaption class="text-center">{img.title}</figcaption>
      </figure>
    {/each}
  </div>

  <h2 class="my-10 text-2xl text-blue-400">Tech used</h2>
  <Cards collection={project.content.tech} cols={4} />

  {#if project.content.links}
    <h2 class="my-10 text-2xl text-blue-400">
      Live project:
      {#each project.content.links as link}
        <br />
        <a class="underline" href={link.href} target="_blank">{link.name}</a>
      {/each}
    </h2>
  {/if}
</main>
