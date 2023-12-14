const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const myBody = document.querySelector("body");
const myUl = document.createElement("ul");

myBody.appendChild(myUl);

countries.forEach((item) => {
	const myIl = document.createElement("li");
	myIl.textContent = item;
	myUl.appendChild(myIl);
});
