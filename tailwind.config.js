module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          750: '#293649',
        },
        glass: {
          10: 'rgba(48, 49, 58, 0.3)',
        },
      },
      borderColor: {
        main: 'rgba(255, 255, 255, 0.24)',
      },
      backgroundImage: {
        glass:
          'linear-gradient(262.6deg, rgba(48, 49, 58, 0.5) 0%, rgba(48, 49, 58, 0.3) 101.18%, rgba(48, 49, 58, 0.3) 101.18%);',
        main: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [],
}
