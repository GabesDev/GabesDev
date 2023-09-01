<script>
  import IconHTML from "~icons/logos/html-5"
  import IconCSS from "~icons/logos/css-3"
  import IconJS from "~icons/logos/javascript"
  import IconXML from "~icons/vscode-icons/file-type-xml"
  import IconSass from "~icons/logos/sass"
  import IconTS from "~icons/logos/typescript-icon"
  import IconReact from "~icons/logos/react"
  import IconSvelte from "~icons/logos/svelte-icon"
  import IconVue from "~icons/logos/vue"
  import IconSF from "~icons/logos/salesforce"
  import IconNode from "~icons/logos/nodejs-icon"
  import IconSitecore from "~icons/simple-icons/sitecore"
  import Circle from "$lib/components/Circle.svelte"
</script>

<Circle cssClasses=" hidden lg:block" />

<div class="relative z-10">
  <h1 class="text-5xl text-center">Hi! I'm Gabes 🧑‍💻</h1>
  <p class="my-8 text-center">A frontend engineer, focused on SFCC projects.</p>
  <div class="grid grid-cols-4 gap-4 mt-5">
    <IconHTML class="w-20 h-20" />
    <IconCSS class="w-20 h-20" />
    <IconJS class="w-20 h-20" />
    <IconNode class="w-20 h-20" />
    <IconXML class="w-20 h-20" />
    <IconSass class="w-20 h-20" />
    <IconTS class="w-20 h-20" />
    <IconSF class="w-20 h-20" />
    <IconSvelte class="w-20 h-20" />
    <IconReact class="w-20 h-20" />
    <IconVue class="w-20 h-20" />
    <IconSitecore class="w-20 h-20 text-red-600" />
  </div>
</div>