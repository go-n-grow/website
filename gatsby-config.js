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
				name: `Go ‘n‘ Grow!`,
				short_name: `GnG`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				// icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-sass`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};


exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"reusable-components": Path.resolve(__dirname, "node_modules/reusable-components/dist/")
			}
		}
	});
};