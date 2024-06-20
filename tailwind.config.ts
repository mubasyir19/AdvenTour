import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/img/background.jpg')",
      },
      colors: {
        'prime-yellow': '#ECD400',
      },
    },
  },
  plugins: [],
};
export default config;
