/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  safelist: [
    "2xl:grid-cols-1",
    "2xl:grid-cols-2",
    "2xl:grid-cols-3",
    "2xl:grid-cols-4",
    "2xl:grid-cols-4",
    "2xl:grid-cols-5",
    "2xl:grid-cols-6",
    "2xl:grid-cols-7",
    "2xl:grid-cols-8",
    "2xl:grid-cols-9",
    "2xl:grid-cols-10",
    "fill-white",
    "w-[33%]",
    "w-[50%]",
    "w-[100%]",
    "-translate-x-[calc(100%+1px)]",
  ],
  theme: {
    extend: {
      boxShadow: {
        container: "25px 25px 50px 25px rgba(0, 0, 0, 0.5)",
        aside: "27px 18px 36px -18px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
}
