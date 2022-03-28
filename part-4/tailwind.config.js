module.exports = {
  content: ['./index.html'],
  presets: [
    require('./brand-colors-preset.js')
  ],
  theme: {
    screens: {
      'phone': '640px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
      },
      fontFamily: {
        'display': ['"Carter One"'],
      }
    }
  },
  plugins: [],
}