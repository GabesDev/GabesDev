import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"

import Icons from "unplugin-icons/vite"

export default defineConfig({
  optimizeDeps: {
    include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
  },
  plugins: [
    sveltekit(),
    Icons({
      compiler: "svelte",
    }),
  ],
})
