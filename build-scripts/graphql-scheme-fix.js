const FileSystem = require("fs");
const Path = require("path");


const SCHEME_URL = "../tsg-project.graphql";
const TEXT_TO_REPLACE_URL = "./graphql-text-to-replace.txt";
const REPLACEMENT_CONTENT_URL = "./graphql-replacement.txt";


function loadFile (path) {
	return FileSystem.readFileSync(path, "utf8");
}

function writeFile (path, content) {
	return FileSystem.writeFileSync(path, content, {
		encoding: "utf8",
		flag: "w"
	});
}


function init () {
	const content = loadFile(Path.resolve(__dirname, SCHEME_URL));

	const textToReplace = loadFile(Path.resolve(__dirname, TEXT_TO_REPLACE_URL));
	const newContent = loadFile(Path.resolve(__dirname, REPLACEMENT_CONTENT_URL));

	const modifiedContent = content.replace(new RegExp(textToReplace, "gm"), newContent);

	writeFile(
		Path.resolve(__dirname, SCHEME_URL),
		modifiedContent
	);
}

try {
	init();
	console.log("Succesfully modified tsg-project.graphql …");
} catch (error) {
	console.error(`Couldn’t modify tsg-project.graphql. Error:`, error);
}
