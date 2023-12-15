const baseUrl = `https://api.nationalize.io?name=`;

const getBtn = document.querySelector("button");
const inputText = document.querySelector('[type="text"]');


const getApi = async (name) => {
	let response = await fetch(`${baseUrl}${name}`);
	// console.log(response);
	let resJson = await response.json();
	console.log(resJson);
    let {country} = resJson;
    console.log(country)
    country.forEach((item) => {
        let {country_id, probability} = item
        let roundProbability = parseFloat(probability*100).toFixed(1)
        const myP = document.createElement("p");
        myP.textContent = `El nombre ${name} tiene un ${roundProbability} porciento de ser de ${country_id}`
        document.body.appendChild(myP);
    });
    
    
};

getBtn.addEventListener("click", () => {
	let name = inputText.value;
	getApi(name);
});
