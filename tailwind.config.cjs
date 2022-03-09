const colors = require('tailwindcss/colors')
const directionUtilities = require('./resources/js/tailwind-utils/direction.cjs')

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
				white: colorwithCssVar('--white'),
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
					mute: colorwithCssVar('--brand-mute'),
				},
				accent: {
					DEFAULT: colorwithCssVar('--accent'),
				},
				pre: colorwithCssVar('--precode'),
				code: 'var(--code)',
			},
			spacing: {
				'header.height': 'var(--header-height)',
			},
			borderRadius: {
				DEFAULT: '6px',
			},
			zIndex: { 
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
				6: '6',
				7: '7',
				8: '8',
				9: '9',
			},
			fontSize: {
				'2xs': ['0.625rem', { lineHeight: '1' }],
			},
			borderWidth: {
				12: '12px',
			},
		},
		fontFamily: {
			calibre: 'Calibre',
			mono: ['"Jetbrains Mono"', 'monospace'],
		},
  },
  plugins: [
		directionUtilities,
	],
}
