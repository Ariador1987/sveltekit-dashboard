import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
	content: ['./src/**/*.{html,svelte,ts}'],

	theme: {
        fontFamily: {
            sans: ["Inter", "sans-serif"],
            serif: ["Lusitana", "sans-serif"]
        },
		extend: {
            colors: {
                primary: colors.blue
            },
        }
	},

	plugins: []
};

module.exports = config;
