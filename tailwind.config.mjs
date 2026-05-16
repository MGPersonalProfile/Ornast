/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel', 'Trajan Pro', 'serif'],
        body: ['Newsreader', 'EB Garamond', 'Iowan Old Style', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      colors: {
        // Paleta del universo Ornast
        paper: {
          dark: '#14110d',
          deep: '#0f0c09',
          surface: '#1b1612',
          'surface-2': '#211b15',
          light: '#f1e8d2',
          'light-deep': '#e6dcc0',
        },
        ink: {
          DEFAULT: '#ede2ce',
          soft: '#b09d80',
          faint: '#6e5e46',
          'on-light': '#1c1610',
          'soft-on-light': '#6b5a3f',
          'faint-on-light': '#9b8a6c',
        },
        blood: {
          DEFAULT: '#bf5536',
          soft: '#874230',
          'on-light': '#8a2f1b',
          'soft-on-light': '#aa4a32',
        },
        rule: {
          DEFAULT: '#2f2820',
          soft: '#221c16',
          'on-light': '#cdbf9c',
          'soft-on-light': '#ddd0ad',
        },
      },
      letterSpacing: {
        widest: '0.32em',
        wider: '0.22em',
        ornast: '0.18em',
      },
      typography: {
        DEFAULT: {
          css: {
            'max-width': 'none',
          },
        },
      },
    },
  },
  plugins: [],
};
