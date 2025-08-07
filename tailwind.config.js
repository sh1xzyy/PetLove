/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'accent-orange': 'var(--accent-orange)',
				'bg-cream': 'var(--bg-cream)',
				'light-white': 'var(--light-white)',
				'error-red': 'var(--error-red)',
				'success-green': 'var(--success-green)',
				'neutral-bg': 'var(--neutral-bg)',
				'bg-female': 'var(--bg-female)',
				'bg-female-selected': 'var(--bg-female-selected)',
				'bg-male': 'var(--bg-male)',
				'bg-male-selected': 'var(--bg-male-selected)',
				'gray-900': 'var(--gray-900)',
				'light-grey': 'var(--light-grey)',
				'grey-30': 'var(--grey-30)',
				'grey-40': 'var(--grey-40)',
				'grey-15': 'var(--grey-15)',
				'grey-06:': 'var(--grey-06)',
				'grey-05': 'var(--grey-05)',
				'grey-005': 'var(--grey-005)',
			},
		},
		screens: {
			sm: '375px',
			md: '768px',
			lg: '1280px',
		},
	},
	plugins: [],
}
