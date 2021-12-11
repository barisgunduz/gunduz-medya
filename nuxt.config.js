export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "gunduz-medya-website",
		htmlAttrs: {
			lang: "tr",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		script: [
			{
				type: "text/javascript",
				src: "/js/plugins.js",
				body: true,
			},
			{
				type: "text/javascript",
				src: "/js/main.js",
				body: true,
			},
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700%7COswald:300,400,500,600,700",
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["./static/css/plugins.css", "./static/css/style.css"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ["@nuxtjs/google-fonts"],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};
