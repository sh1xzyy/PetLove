/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'gray-900': 'var(--gray-900)',
				'accent-orange': 'var(--accent-orange)',
				'bg-cream': 'var(--bg-cream)',
				'light-white': 'var(--light-white)',
				'error-red': 'var(--error-red)',
				'success-green': 'var(--success-green)',
				'neutral-bg': 'var(--neutral-bg)',
			},
		},
	},
	plugins: [],
}
