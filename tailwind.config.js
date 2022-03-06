module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /(from|to|bg|text)-(yellow|green|blue|purple|pink)-(|200|300|400)/, // matches all variants of the color
      variants: ["hover"]
    }
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "rose-100": "#F7D6CE",
        "rose-200": "#F7D3CC",
        "rose-300": "#F6CFCA",
        "rose-400": "#EAFB89",
        "ash-100": "#C6C6C6",
        "ash-200": "#ADADAD",
        "ash-300": "#9D9D9D",
        "ash-400": "#999999",
        "grass-100": "#BACCC0",
        "grass-200": "#9DB8B1",
        "grass-300": "#5D857C",
        "grass-400": "#1C5147",
        "grass-500": "#12443B",
        "grass-600": "#134039",
        milk: "#FCF6F5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
