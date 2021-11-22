const fs = require("fs");
const loader = require("./loader.js");

let dictionary = [];
function getPopulation(config, nb) {
	dictionary = loader.readArchive();
	console.log(dictionary);
	return;
	let holder = [];
	config.forEach((element) => {
		console.log(dictionary);
		let w = find(element);
		holder.push(w);
	});
	console.log(holder);

	let response = [];

	while (nb > 0) {
		let individual = {};
		config.forEach((key, i) => {
			individual[key] = holder[i][getRandomInt(holder[i].length)];
		});
		response.push(individual);
		nb--;
	}

	return response;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
function find(ref) {
	for (let index = 0; index < dictionary.length; index++) {
		if (dictionary[index].ref === ref) {
			if (dictionary[index].words) return dictionary[index].words;
		}
	}
}

console.log(getPopulation(["name", "lastname", "age", "capital"], 3));
