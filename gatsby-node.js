const Path = require("path");


exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"reusable-components": Path.resolve(__dirname, "node_modules/reusable-components/dist/")
			}
		}
	});
};