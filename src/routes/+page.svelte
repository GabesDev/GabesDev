<script>
  import { languages, softSkills, techCards } from "$lib/staticData"
  import CardContainer from "$lib/components/Cards.svelte"
</script>

<main>
  <section
    class="relative px-10 py-16 text-lg bg-gradient-to-r dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-neutral-200"
  >
    <h1 class="mb-10 text-4xl text-blue-400">Hi! My name is Gabriel</h1>
    <p>
      With more than 15 years of experience in web development, I became a
      full-time front-end developer in 2016. I've worked in numerous fields of
      web development - including but not restricted to mail marketing creation,
      development of internal tools for companies, development of complex
      e-commerce systems, and more.
    </p>
    <p>
      I'm also usually responsible for the training sessions for new team
      members and the integration between the front and back-end. I make use of
      my back-end and database knowledge for personal projects.
    </p>
    <p>
      In addition to code quality, I believe the success of a project is
      directly related to the team's relationship, communication, and knowledge
      sharing. Those are the resources I always bring into the projects I'm
      working on.
    </p>
  </section>

  <section
    class="p-10 border-t-2 border-solid dark:bg-neutral-800 bg-neutral-50 border-t-white/25"
  >
    <h2 class="mt-5 mb-10 text-2xl text-blue-400">Technologies</h2>
    <CardContainer cols={4} collection={techCards} />
  </section>

  <section
    class="p-10 border-b-2 border-solid dark:bg-neutral-800 bg-neutral-50 border-b-white/25"
  >
    <h2 class="mt-5 mb-10 text-2xl text-blue-400">Languages</h2>
    <CardContainer cols={2} collection={languages} />
  </section>

  <section class="p-10 bg-gradient-to-r dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-neutral-200">
    <h2 class="mt-5 mb-10 text-2xl text-blue-400">Soft skills</h2>
    <CardContainer cols={5} collection={softSkills} nameOnly={true} />
  </section>
</main>
