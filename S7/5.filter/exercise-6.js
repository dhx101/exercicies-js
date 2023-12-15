const streamers = [
	{ name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
	{ name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
	{ name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
	{ name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const gameMayus = streamers.filter((item) => {
	item.age > 35 && (item.gameMorePlayed = item.gameMorePlayed.toUpperCase());
	// if(item.age > 35) {
	//    return item.gameMorePlayed = item.gameMorePlayed.toUpperCase()
	// }
	return item.gameMorePlayed.toLowerCase().includes("legends");
});
console.log(gameMayus);
