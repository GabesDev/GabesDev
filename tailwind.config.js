/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      boxShadow: {
        nm: "5px 5px 10px #a5a6a7, -5px -5px 10px #ffffff;",
        "nm-pressed":
          "inset 5px 5px 10px #dddee0, inset -5px -5px 10px #ffffff;",
        "sm-nm": "2px 2px 4px #a5a6a7, -2px -2px 4px #ffffff;",
        "sm-nm-pressed":
          "inset 2px 2px 4px #dddee0, inset -2px -2px 4px #ffffff;",
      },
      animation: {
        customPulse: "customPulse 6s 3 ease",
      },
      keyframes: {
        customPulse: {
          "0%, 40%, 60%, 100%": {
            scale: "1",
            boxShadow: "2px 2px 4px #a5a6a7, -2px -2px 4px #ffffff",
          },
          "50%": {
            scale: "1.2",
            boxShadow: "9px 9px 11px #a5a6a7, -9px -9px 8px #ffffff",
          },
        },
      },
    },
  },
  plugins: [],
}
