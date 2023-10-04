import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E5128",
        secondary: "#2d3436",
        accent: "#cddc39",
        error: "#4caf50",
        warning: "#00bcd4",
        info: "#03a9f4",
        success: "#3f51b5",
        darkser: "#2d3436",
        ser: "#1E5128",
        lightser: "#4E9F3D",
        whiteser: "#D8E9A8",
      },
    },
  },
  plugins: [],
}
export default config
