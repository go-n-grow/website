const path = require('path')


exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;
	const mdTemplate = path.resolve(`src/templates/markdown-page.jsx`);
	const result = await graphql(`
		{
			allMarkdownRemark (filter: { fileAbsolutePath: { regex: "//content/markdown-pages/.+md/"} }) {
				edges {
					node {
						fileAbsolutePath
					
						frontmatter {
							title
							meta {
								name
								content
							}
						}
						
						html
					}
				}
			}
		}
	`);

	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Couldn’t generate pages from markdown files.`);
		return;
	}

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: path.parse(node.fileAbsolutePath).name,
			component: mdTemplate,
			context: node
		});
	});
};


/*
*
* Webpack Mods
*
* */

exports.onCreateWebpackConfig = ({ actions, loaders, stage }) => {
	const config = {
		resolve: {
			modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		}
	};

	// when building HTML, window is not defined, so Leaflet causes the build to blow up
	if (stage === 'build-html') {
		config.module = {
			rules: [
				{
					test: /mapbox-gl/,
					use: loaders.null(),
				},
			],
		}
	}

	actions.setWebpackConfig(config)
};