module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        risk: {
          low: '#22c55e',
          medium: '#eab308',
          high: '#f97316',
          critical: '#ef4444',
        },
      },
    },
  },
  plugins: [],
}