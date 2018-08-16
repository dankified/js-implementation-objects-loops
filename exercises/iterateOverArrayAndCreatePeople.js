function person(name, age, alive) {
	return {name, age, alive};
}

function createPeople(arr) {
	return arr.map((mem) => person(...mem));
}

module.exports = createPeople;