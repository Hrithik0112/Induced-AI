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
      transparent: "transparent",
      white: "#fff",
      background: "#000210",
      black: "#000",
    },
    backgroundImage: {
      "navbar-gradient":
        "radial-gradient(circle, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))",
      "footer-gradient":
        "linear-gradient(transparent,rgba(0,0,0,.8)),radial-gradient(circle at 50% 100%,rgba(0,0,0,.8),transparent);",
    },
  },
  plugins: [],
};
export default config;
