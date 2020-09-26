const path = require('path')


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