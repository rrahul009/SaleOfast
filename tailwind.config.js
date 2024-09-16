/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navyblue: '#001f3f',
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'banner1': "url('/banner1.jpg')",
        'banner2': "url('/banner2.jpg')",
        'banner3': "url('/banner3.jpg')",
      },
       
      animation: {
        bounce: 'bounce 4s infinite',
      },
    },
  },
  plugins: [],
};
