import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineExpand: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards 0.5s',
        fadeIn: 'fadeIn 1s ease-out forwards',
        lineExpand: 'lineExpand 0.8s ease-out forwards 1.2s',
      },
    },
  },

  // ✅ Ajoute le plugin DaisyUI
  plugins: [
    daisyui,
    require('tailwind-scrollbar-hide')
  ],

  // ✅ Active les thèmes light et dark de DaisyUI (optionnel, utile si tu veux utiliser leurs composants)
  daisyui: {
    themes: ["light", "dark"],
  },
}