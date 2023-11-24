import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
	content: ['./src/**/*.{html,svelte,ts}'],

	theme: {
		extend: {
            colors: {
                primary: colors.blue
            }
        }
	},

	plugins: []
};

module.exports = config;
