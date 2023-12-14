const streamers = [
	{ name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
	{ name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
	{ name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
	{ name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const searchBtn = document.querySelector("[data-function=toShowFilterStreamers]");
searchBtn.addEventListener("click", (event) => {
	const inputText = document.querySelector("[data-function=toFilterStreamers]");
	console.log(inputText.value)
    const buscador = streamers.filter((item) => item.name.toLowerCase().includes(inputText.value));
	console.log(buscador);
});
