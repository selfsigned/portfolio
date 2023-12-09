/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      bitmap: ['DotGothic16'],
      sans: ['Space Grotesk'],
      mono: ['Space Mono'],
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#33ff00",
          "base-content": "#ffffff",
        },
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#33ff00",
        },
      },
    ],
  }
}