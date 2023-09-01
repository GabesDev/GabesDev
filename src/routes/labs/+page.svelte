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
  class="flex flex-wrap items-stretch w-full gap-10 p-5 mt-8 text-left justify-evenly"
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
