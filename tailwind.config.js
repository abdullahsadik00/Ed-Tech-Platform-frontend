/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS/TS/JSX/TSX files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#3B82F6', // Main primary color
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        secondary: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B', // Main secondary color
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        accent: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6', // Main accent color
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        success: {
          50: '#ECFDF5',
          500: '#10B981',
          700: '#047857',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          700: '#B91C1C',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          700: '#B45309',
        },
        info: {
          50: '#F0F9FF',
          500: '#0EA5E9',
          700: '#0369A1',
        },
        background: {
          light: '#FFFFFF',
          DEFAULT: '#F9FAFB',
          dark: '#F3F4F6',
        },
        surface: {
          light: '#FFFFFF',
          DEFAULT: '#F9FAFB',
          dark: '#F3F4F6',
        },
        border: {
          light: '#F3F4F6',
          DEFAULT: '#E5E7EB',
          dark: '#D1D5DB',
        },
        text: {
          primary: '#111827',
          secondary: '#374151',
          tertiary: '#6B7280',
          disabled: '#9CA3AF',
        },
        scrollbar: '#4A90E2',
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover':
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        dropdown:
          '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        card: '0.5rem',
        button: '0.375rem',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Add the scrollbar plugin
  ],
};
