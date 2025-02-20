/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const roleColors = {
  admin: { primary: 'purple', accent: 'fuchsia' },
  teacher: { primary: 'blue', accent: 'cyan' },
  student: { primary: 'green', accent: 'emerald' },
  parent: { primary: 'orange', accent: 'amber' },
};

module.exports = {
  theme: {
    extend: {
      colors: {
        role: Object.fromEntries(
          Object.entries(roleColors).map(([role, colors]) => [
            role,
            {
              DEFAULT: `var(--color-role-${role})`,
              accent: `var(--color-role-${role}-accent)`,
            },
          ])
        ),
      },
    },
  },
};
