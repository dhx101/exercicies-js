const movies = [
	{ title: "Madagascar", stars: 4.5, date: 2015 },
	{ title: "Origen", stars: 5, date: 2010 },
	{ title: "Your Name", stars: 5, date: 2016 },
];

const peli2010 = movies.find((item)=> item.date == 2010)
console.log(peli2010);