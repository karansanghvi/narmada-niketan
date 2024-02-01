/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        '62': '62px',
        '60': '60px',
      },
      textColor: {
        textColor: '#39DB4A',
      },
      backgroundColor: {
        backgroundColor: '#39DB4A',
      },
      borderColor: {
        borderColor: '#39DB4A',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ]
};
