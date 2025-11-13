import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // Đen thẳm (gần như tắt màn hình)
        surface: '#121212',    // Màu nền cho card
        primary: '#00ff41',    // Hacker Green (cho text quan trọng, cursor)
        secondary: '#bd00ff',  // Purple (cho các mảng phụ, tạo nét Cyberpunk)
        dim: '#888888',        // Text phụ
        border: '#333333',     // Viền mỏng
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)', 'monospace'], // Dùng cho Heading, Code block
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
