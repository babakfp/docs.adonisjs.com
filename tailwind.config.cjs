const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./resources/**/*.{edge,js}'],
  theme: {
    extend: {
			colors: {
				gray: colors.neutral,
				brand: {
					DEFAULT: '#5A45FF',
					faded: '#AFA7EF',
				},
				accent: {
					DEFAULT: '#02E2FF',
				},
			},
		},
  },
  plugins: [],
}
