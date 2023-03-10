module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#11172B',
        backgroundLight: '#1B2138',
        primary: '#0EE7B7',
        secondary: '#7AC7E3',
        gradient: 'linear-gradient(225deg, #313860 0%, #11172B 100%);',
        text: '#848DA0',
        textHighlight: '#444B5B',
        textLight: '#C4C4C4',
        border: '#313958',
        inputBackground: '#1E253E',
        error: '#d45d5d'
      },
      screens: {
        'max-w-screen-2xl': { max: '1450px' },
        'max-w-screen-lg': { max: '1000px' },
        'max-w-screen-md': { max: '700px' },
        'max-w-screen-sm': { max: '500px' },
        'max-w-screen-xs': { max: '450px' }
      },
      fontFamily: {
        primary: ['"Montserrat"', 'sans-serif'],
        secondary: ['"Jetbrains Mono"', 'monospace']
      }
    }
  },
  plugins: []
}
