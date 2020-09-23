exports.onCreateWebpackConfig = ({ actions, loaders, stage }) => {
	if (stage === "build-html") {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /mapbox-gl/,
						use: loaders.null()
					},
				],
			}
		})
	}
};