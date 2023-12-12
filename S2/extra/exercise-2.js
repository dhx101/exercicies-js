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
let totalVolume = 0;
let contador = 0
for (let data of users) {
	// console.log(data)
	for (let typeOfMusic in data.favoritesSounds) {
		// console.log(typeOfMusic);
		// console.log(data.favoritesSounds[typeOfMusic])
		// console.log(data.favoritesSounds[typeOfMusic].volume)
		totalVolume += data.favoritesSounds[typeOfMusic].volume;
        contador++
	}
}
console.log(totalVolume);
console.log(contador);
console.log(totalVolume/contador)
