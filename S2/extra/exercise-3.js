const users = [
	{
		name: "Manolo el del bombo",
		favoritesSounds: {
			waves: { format: "mp3", volume: 50 },
			rain: { format: "ogg", volume: 60 },
			firecamp: { format: "mp3", volume: 80 },
		},
	},
	{
		name: "Mortadelo",
		favoritesSounds: {
			waves: { format: "mp3", volume: 30 },
			shower: { format: "ogg", volume: 55 },
			train: { format: "mp3", volume: 60 },
		},
	},
	{
		name: "Super Lopez",
		favoritesSounds: {
			shower: { format: "mp3", volume: 50 },
			train: { format: "ogg", volume: 60 },
			firecamp: { format: "mp3", volume: 80 },
		},
	},
	{
		name: "El culebra",
		favoritesSounds: {
			waves: { format: "mp3", volume: 67 },
			wind: { format: "ogg", volume: 35 },
			firecamp: { format: "mp3", volume: 60 },
		},
	},
];

let allTypeOfMusic = [];
let counterObj = [];
let eachTypeOfMusic = [];

for (let user of users) {
	// console.log(user.favoritesSounds);
	for (let favSound in user.favoritesSounds) {
		allTypeOfMusic.push(favSound);
	}
	for (let i = 0; i < allTypeOfMusic.length; i++) {
		if (!eachTypeOfMusic.includes(allTypeOfMusic[i])) {
			eachTypeOfMusic.push(allTypeOfMusic[i]);
			// counterObj[count] = 
		}
	}
}

allTypeOfMusic.forEach((item) => {
	
		counterObj[item] = ++counterObj[item] || 1;
	
});

console.log( counterObj);
