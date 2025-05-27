// // tailwind.config.js
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         c1: '#58d186',
//         c2: '#f03c3c',
//         c3: '#6EE7B7',
//         darkGray: '#111827',
//       },
//     },
//   },
//   plugins: [],
// };


// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
      colors: {
        c1: '#58d186',
        c2: '#f03c3c',
        c3: '#6EE7B7',
        darkGray: '#111827',
      },
       animation: {
        'fade-in-bounce': 'fadeInBounce 0.8s ease-out forwards',
        shake: 'shake 0.5s ease-in-out',
      },
      keyframes: {
        fadeInBounce: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-8px)' },
          '40%, 80%': { transform: 'translateX(8px)' },
        },
      },
    },
  },
  plugins: [],
};
