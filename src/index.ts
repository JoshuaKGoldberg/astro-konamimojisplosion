import { AstroIntegration } from "astro";

export function astroKonamimojisplosion() {
	return {
		hooks: {
			"astro:config:setup"({ injectScript }) {
				injectScript("page", `import "konamimojisplosion/dist/global.js";`);
			},
		},
		name: "astro-konamimojisplosion",
	} satisfies AstroIntegration;
}

export default astroKonamimojisplosion;
