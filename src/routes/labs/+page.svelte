<script>
  import Card from "$lib/components/LabsCard.svelte"
  import { labs } from "$lib/staticData"
</script>

<section
  class="relative px-10 py-16 text-lg bg-gradient-to-r dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-neutral-200"
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

<section class="p-10 border-t-2 border-solid dark:bg-neutral-800 bg-neutral-50 border-t-white/25">
  <Card collection={labs} cols={3} />
</section>
