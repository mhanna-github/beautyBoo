/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			'dark-blue': '#4279B8',
			'blue': '#8ABEE2',
			'light-blue': '#BADEF3',
			'accent': '#579ACD',
			'black': '#131313',
			'white': '#F4F8F9',
		},
		fontFamily: {
			'telegraf': ['PP Telegraf', 'sans-serif'],
			'monument': ['Monument Extended', 'sans-serif'],
		},
		extend: {
			animation: {
				marquee: 'marquee 35s linear infinite',
				marquee2: 'marquee2 35s linear infinite',
			},
			keyframes: {
				marquee: {
				'0%': { transform: 'translateX(0%)' },
				'100%': { transform: 'translateX(-100%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
		},
	},
	plugins: [],
}