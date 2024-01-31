const plugin = require("tailwindcss");

/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,html}"],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".no-scrollbar": {
					"-ms-overflow-style": "none",
					"scrollbar-width": "none",
				},
				".no-scrollbar::-webkit-scrollbar": {
					display: "none",
				},
			});
		}),
	],
};
