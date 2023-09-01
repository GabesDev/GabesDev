<script>
  import Card from "$lib/components/Card.svelte"
  import { portfolio } from "./portfolio"
</script>

<h1 class="text-5xl">Portfolio</h1>
<p>Some of the projects I've worked on.</p>

<div
  class="flex flex-wrap items-stretch w-full gap-10 p-5 mt-8 text-left justify-evenly"
>
  {#each portfolio as { name, description, image, tech, techDetails, address, responsibilities }}
    <Card
      {name}
      {description}
      image={`/portfolio/${image}`}
      {tech}
      {techDetails}
      {address}
      {responsibilities}
    />
  {/each}
</div>
