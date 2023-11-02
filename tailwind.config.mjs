/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			"2xl": { max: "1535px" },
			xl: { max: "1279px" },
			bxl: { max: "1170px" },
			lGG: { max: "1040px" },
			lg: { max: "1023px" },
			blg: { max: "910px" },
			md: { max: "880px" },
			mdl: { max: "750px" },
			sm: { max: "680px" },
			bsm: { max: "580px" },
			xr: { max: "420px" },
			se: { max: "375px" },
			mn: { min: "767px" },
			blgMin: { min: "910px" },
		  },
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light"]
	},
	darkMode: 'class',
}
