<script>
  import Card from "$lib/components/LabsCard.svelte"
  import { labs } from "$lib/staticData"
</script>

<section
  class="relative px-10 py-16 text-lg bg-gradient-to-r from-neutral-900 to-neutral-950"
>
  <h1 class="mb-10 text-4xl text-blue-400">My Labs</h1>
  <p>
    Those are my fun side projects. Most of them don't leave my localhost, but
    the ones who do will be here.
  </p>
  <p>
    You'll be able to see some of my code, and things I'm studying at the
    moment.
  </p>
</section>

<section class="p-10 bg-neutral-800">
  <Card collection={labs} cols={3} />
</section>
