/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Plus Jakarta Sans', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    extend: {
      colors: {
        background: {
          DEFAULT: '#F4EEFF',
          dark: '#18181b', // zinc-900
        },
        foreground: {
          DEFAULT: '#424874',
          dark: '#fafafa', // zinc-50
        },
        primary: {
          DEFAULT: '#D0A2F7',
          light: '#DCBFFF',
          lighter: '#E5D4FF',
          lightest: '#F1EAFF',
          dark: '#3f3f46', // zinc-700
        },
        secondary: {
          DEFAULT: '#A294F9',
          light: '#CDC1FF',
          lighter: '#E5D9F2',
          lightest: '#F5EFFF',
          dark: '#71717a', // zinc-500
        },
        accent: {
          DEFAULT: '#A6B1E1',
          dark: '#52525b', // zinc-600
          light: '#DCD6F7',
          lighter: '#F4EEFF',
        },
        muted: {
          DEFAULT: '#F4EEFF',
          foreground: '#424874',
          dark: '#27272a', // zinc-800
          'dark-foreground': '#d4d4d8', // zinc-300
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#F4EEFF',
          dark: '#dc2626', // red-600
          'dark-foreground': '#fafafa',
        },
        border: {
          DEFAULT: '#DCD6F7',
          dark: '#27272a', // zinc-800
        },
        input: {
          DEFAULT: '#DCD6F7',
          dark: '#27272a', // zinc-800
        },
        ring: {
          DEFAULT: '#424874',
          dark: '#52525b', // zinc-600
        },
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        8.5: '2.125rem',
        9.5: '2.375rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        prose: '65ch',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '3xs': ['0.5rem', { lineHeight: '0.625rem' }],
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
        'slide-in': 'slide-in 0.2s ease-out',
        'slide-out': 'slide-out 0.2s ease-in',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'inner-sm': 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'inner-md': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'inner-lg': 'inset 0 4px 6px -1px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
