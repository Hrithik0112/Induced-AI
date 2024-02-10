const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-urban)"],
      syne: ["var(--font-syne)"],
    },
    colors: {
      white: "#fff",
      background: "#000210",
      black: "#000",
    },
    backgroundImage: {
      "navbar-gradient":
        "radial-gradient(circle, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))",
    },
  },
  plugins: [],
};
export default config;
