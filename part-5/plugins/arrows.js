const plugin = require('tailwindcss/plugin')

const arrows = plugin(function({ addComponents }) {
  addComponents({
    '.arrow': {
      border: 'solid black',
      borderWidth: '0 3px 3px 0',
      display: 'inline-block',
      padding: '3px',
      marginLeft: '5px'
    },
    '.arrow-up': {
      transform: 'rotate(-135deg)'
    },
    '.arrow-right': {
      transform: 'rotate(-45deg)'
    },
    '.arrow-down': {
      transform: 'rotate(45deg)'
    },
    '.arrow-left': {
      transform: 'rotate(135deg)'
    },
  })
})

module.exports = arrows