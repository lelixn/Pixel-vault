/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'electric': '#00FFFF',
        'neon-green': '#39FF14',
        'hot-pink': '#FF1493',
        'cyber-yellow': '#FFFF00',
        'dark-purple': '#1A0B2E',
        'neo-black': '#0D0D0D',
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px #000000',
        'brutal-lg': '12px 12px 0px 0px #000000',
        'brutal-xl': '16px 16px 0px 0px #000000',
        'brutal-color': '8px 8px 0px 0px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'shake': 'shake 0.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px #00FFFF' },
          '100%': { boxShadow: '0 0 40px #00FFFF, 0 0 60px #00FFFF' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
      },
    },
  },
  plugins: [],
};