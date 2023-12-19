const dragonBallApi = async () => {
	let planets = await fetch("http://localhost:3000/planets");
	let plaJson = await planets.json();

	let myContainer = document.querySelector('[data-function="planets"]');
	plaJson.forEach((planet) => {
		let myPlanetContainer = document.createElement("div");
		let planetName = document.createElement("h3");
		let planetImg = document.createElement("img");
		planetImg.setAttribute("src", planet.image);
		planetName.textContent = planet.name;
		myContainer.appendChild(myPlanetContainer);
		myPlanetContainer.appendChild(planetName);
		myPlanetContainer.appendChild(planetImg);
		console.log(planet);
		myPlanetContainer.addEventListener("click", async () => {
			let characters = await fetch(`http://localhost:3000/characters?idPlanet=${planet.id}`);
			let charJson = await characters.json();
			let myCharacterContainer = document.querySelector('[data-function="characters"]');
			while (myCharacterContainer.lastChild) {
				myCharacterContainer.removeChild(myCharacterContainer.lastChild);
			}
			charJson.forEach((element) => {
				let myCharacter = document.createElement("div");
				let myName = document.createElement("h5");
				let myAvatar = document.createElement("img");
				let myDescription = document.createElement("p");
				myName.textContent = element.name;
				myAvatar.setAttribute("src", element.avatar);
				myDescription.textContent = element.description;
				myCharacterContainer.appendChild(myCharacter);
				myCharacter.appendChild(myName);
				myCharacter.appendChild(myAvatar);
				myCharacter.appendChild(myDescription);
				myDescription.classList.add("appear");
				myCharacter.addEventListener("click", () => {
					myDescription.classList.toggle("appear");
				});
			});
		});
	});
};

dragonBallApi();
