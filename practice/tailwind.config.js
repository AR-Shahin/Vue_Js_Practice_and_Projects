module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container:{
            center : true
        },
      extend: {},
    },
    variants: {
      extend: {},
        float: ['responsive', 'direction'],
        margin: ['responsive', 'direction'],
        padding: ['responsive', 'direction'],
    },
    plugins: [
        require('tailwindcss-dir')(),
    ],
  }
  