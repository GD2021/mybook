/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#F5F5F5', // 主背景色
        'primary-text': '#333333', // 主文本颜色
      },
    },
  },
  plugins: [],
}