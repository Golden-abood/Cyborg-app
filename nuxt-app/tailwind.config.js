/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ec6090",
        secondary: "#ffff00",
        dark: "#1f2122",
        lightDark: "#27292a",
        light: "#666",
        error: "#fe0000",
      },
    },
  },
  plugins: [],
};
