const colors = require('tailwindcss/colors')

const colorwithCssVar = value => {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${value}))`
		}
		return `rgb(var(${value}) / ${opacityValue})`
	}
}

module.exports = {
	content: ['./resources/**/*.{edge,js}'],
  theme: {
    extend: {
			maxWidth: theme => theme('spacing'),
			minWidth: theme => theme('spacing'),
			minHeight: theme => theme('spacing'),
			maxHeight: theme => theme('spacing'),
			colors: {
				gray: {
					50: colorwithCssVar('--gray-50'),
					100: colorwithCssVar('--gray-100'),
					200: colorwithCssVar('--gray-200'),
					300: colorwithCssVar('--gray-300'),
					400: colorwithCssVar('--gray-400'),
					500: colorwithCssVar('--gray-500'),
					600: colorwithCssVar('--gray-600'),
					700: colorwithCssVar('--gray-700'),
					800: colorwithCssVar('--gray-800'),
					900: colorwithCssVar('--gray-900'),
				},
				brand: {
					DEFAULT: colorwithCssVar('--brand'),
					faded: colorwithCssVar('--brand-faded'),
					mute: colorwithCssVar('--brand-mute'),
				},
				accent: {
					DEFAULT: colorwithCssVar('--accent'),
				},
			},
		},
  },
  plugins: [],
}
