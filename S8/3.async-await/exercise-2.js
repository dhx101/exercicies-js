async function getCharacters() {
	let character = await fetch("https://rickandmortyapi.com/api/character");

	let charJson = await character.json();

	console.log(charJson);
}

getCharacters();
