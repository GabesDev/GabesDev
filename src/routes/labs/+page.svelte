<script>
  import Card from "$lib/components/Card.svelte"
  import { labs } from "./labs"
</script>

<h1 class="text-5xl">Labs</h1>
<p>
  Here's where I list small side-projects and tutorials I followed to practice
  new technologies.
</p>
<div
  class="flex flex-wrap items-stretch justify-center w-full gap-10 p-5 pb-16 mt-8 text-left"
>
  {#each labs as { name, description, image, tech, code, address }}
    <Card
      {name}
      {description}
      image={`/labs/${image}`}
      {tech}
      {code}
      {address}
    />
  {/each}
</div>
