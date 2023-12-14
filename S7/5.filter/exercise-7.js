const streamers = [
	{ name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
	{ name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
	{ name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
	{ name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const inputText = document.querySelector("[data-function=toFilterStreamers]");
inputText.addEventListener("input", (event) => {
	console.log(event.target.value);
	const buscador = streamers.filter((item) => item.name.toLowerCase().includes(item.target.value));
	console.log(buscador);
});
