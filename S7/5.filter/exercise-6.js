const streamers = [
	{ name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
	{ name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
	{ name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
	{ name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const gameMayus = streamers.filter((item) => {
	if (item.age > 35 && item.gameMorePlayed.toLowerCase().includes("legends")) {
		return (item.gameMorePlayed = item.gameMorePlayed.toUpperCase());
	}
});
console.log(gameMayus);
