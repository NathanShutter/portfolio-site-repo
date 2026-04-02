module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#10B981',
        'primary-dark': '#059669',
      },
      boxShadow: {
        sm: '0 6px 18px rgba(2,6,23,0.06)',
        md: '0 12px 30px rgba(2,6,23,0.12)'
      },
    }
  },
  plugins: []
};
