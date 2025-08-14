// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: '/threat-slayer/',  
//   plugins: [
//     react(),
//   ],
// })
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-dark': '#0f1117',
        'card-dark': '#1a1d27',
        'accent-blue': '#0ea5e9',
        'accent-red': '#ef4444',
        'accent-green': '#22c55e',
        'accent-orange': '#f97316',
      }
    },
  },
  plugins: [],
}