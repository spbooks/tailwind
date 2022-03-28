const plugin = require('tailwindcss/plugin')

const counters = plugin(function({ addBase, addUtilities, theme }) {
  addBase({
    'h1': {
      counterReset: 'level-1'
    },
    'h2': {
      counterReset: 'level-2'
    },
    'h3': {
      counterReset: 'level-3'
    },
    'h2::before, h3::before, h4::before': {
      color: theme('colors.slate.600')
    },
    'h2::before': {
      counterIncrement: 'level-1',
      content: 'counter(level-1) ". "'
    },
    'h3::before': {
      counterIncrement: 'level-2',
      content: 'counter(level-1) "." counter(level-2) " "'
    },
    'h4::before': {
      counterIncrement: 'level-3',
      content: 'counter(level-1) "." counter(level-2) "." counter(level-3) " "'
    },
  })
  addUtilities({
    '.collection': {
      counterReset: 'collection'
    },
    '.item::before': {
      counterIncrement: 'collection',
      content: 'counters(collection,".") " "'
    } 
  })
})

module.exports = counters