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
        bg: '#1F3044',
        surface: '#263849',
        border: '#3d4a5c',
        'text-muted': '#C5CDD9'
      },
      maxWidth: {
        'container': '1100px'
      },
      boxShadow: {
        sm: '0 6px 18px rgba(2,6,23,0.06)',
        md: '0 12px 30px rgba(2,6,23,0.12)'
      },
      borderRadius: {
        xl: '12px'
      }
    }
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#10B981',
          'accent': '#16a34a',
          'neutral': '#1F2937',
          'base-100': '#0f1724',
          'info': '#3ABFF8',
          'success': '#36D399',
          'warning': '#FBBD23',
          'error': '#F87272',
        }
      }
    ],
  }
};