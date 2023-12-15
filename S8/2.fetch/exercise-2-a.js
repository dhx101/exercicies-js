const baseUrl = `https://api.nationalize.io?name=`;

const getBtn = document.querySelector("button");
const inputText = document.querySelector('[type="text"]');

const getApi = async (countryName) => {
	let response = await fetch(`${baseUrl}${countryName}`);
	console.log(response);
	let resJson = await response.json();
	console.log(resJson);
};

getBtn.addEventListener("click", () => {
	let countryName = inputText.value;
	console.log(countryName);
	getApi(countryName);
});
