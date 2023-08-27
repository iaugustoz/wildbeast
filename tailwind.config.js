/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    '.**/*.html',
  ],  theme: {
    screens: {
      'xl': {'max': '1200px'},
      'md': {'max': '760px'},
    },
    extend: {  
    boxShadow: {
      'sm': '5px 5px 15px 0px rgba(44, 44, 44, 0.15)',
    },
    spacing: {
      '20px': '20px',
      '10px': '10px',
      '30px': '30px',
    },
    colors: {
      'lilac-900': '#8844EE',
      'lilac-600':'#B07DFB',
      'gray-25': '#FAFBFC',
    },
      backgroundImage: {
        'lilac-gradient': 'linear-gradient(135deg, #8844EE, #B07DFB)',
      },
      fontFamily: {
        'vollkorn': ['Vollkorn', 'Georgia', 'Serif'],
        'courier': ['Courier', 'monospace']
      },  
    },
  },
  plugins: [],
}

