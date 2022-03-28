module.exports = {
  content: ['./examples/*.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('./plugins/counters'),
    require('./plugins/arrows')
  ],
}
