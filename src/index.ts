import { AstroIntegration } from "astro";

export function astroKonamimojisplosion() {
	return {
		hooks: {
			"astro:config:setup"({ injectScript }) {
				injectScript(
					"page",
					`
                    import { initializeKonamimojisplosion } from "konamimojisplosion";

                    initializeKonamimojisplosion();
                `
				);
			},
		},
		name: "astro-konamimojisplosion",
	} satisfies AstroIntegration;
}

export default astroKonamimojisplosion;
