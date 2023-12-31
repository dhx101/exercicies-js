const streamers = [
	{ name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
	{ name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
	{ name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
	{ name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const inputText = document.querySelector("[data-function=toFilterStreamers]");

const leerInput = () => {
	const buscador = streamers.filter((item) => item.name.toLowerCase().includes(inputText.value));
	console.log(buscador);
};
inputText.addEventListener("input", leerInput);
