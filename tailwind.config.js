/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '8rem',
        sm: '2rem',
        md: '4rem',
        lg: '6rem'
      }
    },
    screens: {
      sm: '350px',
      md: '768px',
      lg: '1024px',
      xlg: '1440px'
    },
    extend: {
      colors: {
        Gray: '#D9D9D9',
        lightGray: '#EBEAEA'
      }
    }
  },
  plugins: []
};
