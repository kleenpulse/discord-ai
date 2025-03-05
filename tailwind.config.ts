import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#01012B",
				secondary: "#2B49BB",
				"accent-yellow": "#FBDF3C",
				"accent-purple": "#647af5",
			},
			fontFamily: {
				inter: ["var(--font-inter)"],
				helveticaBold: ["var(--font-helveticaBold)"],
				helveticaRegular: ["var(--font-helveticaRegular)"],
			},
		},
	},
	plugins: [],
} satisfies Config;
