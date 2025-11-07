import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      width: {
        responsive: 'min(75vw, 90rem)',
      },
      boxShadow: {
        card: '10px 10px 0px 0px #5457f2ff',
        button: '4px 4px 0px 0px #000000',
      },
      colors: {
        grey: '#01112B',
        white: '#F3F3EB',
        orange: '#FCA5A5',
        yellow: '#C3D69B',
        purple: '#5457f2ff',
      },
      screens: {
        xs: '300px',
        smr: '480px',
        // There was a mysterious break point around 1169px in HeaderClient.tsx,
        // so a custom breakpoint was created to overwrite it
        // and now a CSS pattern can be applied with this breakpoint.
        'md-lg': '1169px',
        'lg-xl': '1300px',
      },
    },
  },
  plugins: [],
};

export default config;
