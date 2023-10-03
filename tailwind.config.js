/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        container: "5px 35px 25px 15px rgba(0, 0, 0, 0.5)",
        darkaside: "27px 18px 36px -18px rgba(0, 0, 0, 0.4)",
        darkactive: "0px -20px 50px rgba(255,255,255, 0.4)",
        darkinner: "inset 0px 10px 10px 0px rgb(0 0 0 / 50%)",
        aside: "30px 0px 20px -20px rgba(0, 0, 0, 0.1)",
        inner: "inset 0px 10px 15px 0px rgb(0 0 0 / 10%)",
      },
    },
  },
  plugins: [],
}
