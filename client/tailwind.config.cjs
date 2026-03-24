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
        dim: {
          'primary': '#10B981',
          'primary-focus': '#059669',
          'primary-content': '#FFFFFF',
          'secondary': '#34D399',
          'accent': '#16a34a',
          'neutral': '#263849',
          'base-100': '#1F3044',
          'base-200': '#263849',
          'base-300': '#3d4a5c',
          'base-content': '#FFFFFF',
          'info': '#3ABFF8',
          'success': '#36D399',
          'warning': '#FBBD23',
          'error': '#F87272'
        }
      },
      'light'
    ],
    darkTheme: 'dim'
  }
};