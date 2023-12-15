const harryPotterApi = async () => {
	let resolve = await fetch("https://hp-api.onrender.com/api/characters");
	let resJson = await resolve.json();
	console.log(resJson);
	resJson.forEach((item) => {
        let myName = document.createElement('h4');
        myName.textContent = item.name;
		let myImg = document.createElement("img");
		myImg.setAttribute("src", item.image);
		myImg.setAttribute("alt", item.name);
        document.body.appendChild(myName)
        document.body.appendChild(myImg)
	});
};

harryPotterApi();

const myDivs = document.createElement("div");
