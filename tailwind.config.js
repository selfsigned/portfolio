/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			bitmap: ['DotGothic16'],
			vcr: ['VCR OSD Mono'],
			sans: ['Space Grotesk'],
			mono: ['Space Mono']
		},
		extend: {
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				md: '0 4px 8px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)'
			}
		}
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value
					})
				},
				{ values: theme('textShadow') }
			);
		}),
		require('daisyui')
	],
	// Moved back to daisyui v3 since oklab isn't supported by html2canvas
	daisyui: {
		themes: [
			{
				light: {
					// "[data-theme=light]" for daisyui v3, ['light'] for v4
					...require('daisyui/src/theming/themes')['[data-theme=light]'],
					primary: '#33ff00',
					// for v3
					'--btn-text-case': 'none'
				},
				dark: {
					// ditto
					...require('daisyui/src/theming/themes')['[data-theme=forest]'],
					// for v3
					'--btn-text-case': 'none'
				}
			},
			'cyberpunk',
			'acid'
		]
	}
};
