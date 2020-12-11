const Path = require("path");

// load env vars
require("dotenv").config({
	path: `.env.${ process.env.NODE_ENV }`,
});

module.exports = {
	siteMetadata: {
		siteUrl: `https://www.go-n-grow.org`,
		title: `Go ’n’ Grow!`,
		description: `Samen pflanzen. Kiez verschönern. Insekten retten. Es ist soooo einfach!`,
		location: "Potsdam",
		author: `Joseph Ribbe, Coderwelsch`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-plugin-react-redux`,
			options: {
				pathToCreateStoreModule: "./src/state/createStore",
				serialize: {
					space: 0,
					isJSON: true,
					unsafe: false,
					ignoreFunction: true,
				},
				cleanupOnClient: true,
				windowKey: "__PRELOADED_STATE__",
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `files`,
				path: `${ __dirname }/src/`,
			},
		},
		{
			resolve: `gatsby-plugin-zopfli`,
			options: {
				extensions: ["css", "html", "js", "svg"],
			},
		},
		{
			resolve: "gatsby-source-graphql",
			options: {
				typeName: "TS",
				fieldName: "takeshape",
				url: `https://api.takeshape.io/project/${ process.env.GATSBY_TAKESHAPE_PROJECT }/graphql`,
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${ process.env.GATSBY_TAKESHAPE_TOKEN }`,
				},
				fetchOptions: {},
			},
		},
		`gatsby-transformer-video`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Go ’n’ Grow!`,
				short_name: `G ’n’ G`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/assets/icons/favicon.png`
			},
		},
		`gatsby-plugin-sass`,
		{
			resolve: "gatsby-plugin-matomo",
			options: {
				siteId: "1",
				matomoUrl: "https://matomo.go-n-grow.org/",
				siteUrl: "https://go-n-grow.org",
				matomoPhpScript: 'matomo.php',
				matomoJsScript: 'matomo.js',
				requireConsent: false,
				disableCookies: false,
				cookieDomain: '*.go-n-grow.org',
				localScript: '/matomo.js',
			},
		}
	],
};

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"reusable-components": Path.resolve(__dirname, "node_modules/reusable-components/dist/"),
			},
		},
	});
};