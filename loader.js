const fs = require("fs");

exports.readArchive = (cb) => {
	return parseCSV(fs.readFileSync("./archive.txt", "utf8").split("\r\n"));
};

function parseCSV(array) {
	let parsedArray = [];
	for (let index = 0; index < array.length; index += 2) {
		let e = {
			ref: array[index],
			words: array[index + 1],
		};
		parsedArray.push(e);
	}
	return parsedArray;
}
