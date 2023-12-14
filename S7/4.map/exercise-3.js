const cities = [
	{ isVisited: true, name: "Tokyo" },
	{ isVisited: false, name: "Madagascar" },
	{ isVisited: true, name: "Amsterdam" },
	{ isVisited: false, name: "Seul" },
];

const visitedCity = cities.map((item) => {
	if (item.isVisited == true) {
		item.name = `${item.name} (Visitado)`;
		return item.name;
	}
	return item.name;
});
console.log(visitedCity);
