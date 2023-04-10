import { AstroIntegration } from "astro";

export function konamimojisplosion() {
	return {
		hooks: {
			"astro:config:setup"({ injectScript }) {
				injectScript("page", `import "konamimojisplosion/dist/global.js";`);
			},
		},
		name: "astro-konamimojisplosion",
	} satisfies AstroIntegration;
}

export default konamimojisplosion;
