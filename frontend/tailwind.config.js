module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				space: ["Space Mono", "monospace"],
				Neue: ["NeueLight", "monospace"],
				NeueBold: ["NeueBold", "monospace"],
			},
			animation: ["hover", "focus"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
