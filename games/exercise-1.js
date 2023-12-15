let cardArray = [
	{
		id: 1,
		name: "earth",
		img: "public/exercise-1/earth.svg",
	},
	{
		id: 2,
		name: "jupiter",
		img: "public/exercise-1/jupiter.svg",
	},
	{
		id: 3,
		name: "mars",
		img: "public/exercise-1/mars.svg",
	},
	{
		id: 4,
		name: "mercury",
		img: "public/exercise-1/mercury.svg",
	},
	{
		id: 5,
		name: "saturn",
		img: "public/exercise-1/saturn.svg",
	},
	{
		id: 6,
		name: "uranus",
		img: "public/exercise-1/uranus.svg",
	},
	{
		id: 7,
		name: "earth",
		img: "public/exercise-1/earth.svg",
	},
	{
		id: 8,
		name: "jupiter",
		img: "public/exercise-1/jupiter.svg",
	},
	{
		id: 9,
		name: "mars",
		img: "public/exercise-1/mars.svg",
	},
	{
		id: 10,
		name: "mercury",
		img: "public/exercise-1/mercury.svg",
	},
	{
		id: 11,
		name: "saturn",
		img: "public/exercise-1/saturn.svg",
	},
	{
		id: 12,
		name: "uranus",
		img: "public/exercise-1/uranus.svg",
	},
];

const myGrid = document.querySelector('[data-function="grid"]');
const myScore = document.querySelector('[data-function="score"]');
const myAttepts = document.querySelector('[data-function="attempts"]');
// console.log(myScore, myAttepts);
const valuesArray = [];
let countScore = 0;
let countAttemps = 0;
cardArray.forEach((item) => {
	const myCard$$ = document.createElement("img");
	myCard$$.setAttribute("src", item.img);
	myCard$$.setAttribute("alt", item.name);
	myGrid.appendChild(myCard$$);
});

const addValueToArray = (item) => {
    
    console.log("click")
	// console.log(item.target.classList);
	if (item.target.alt != undefined && item.target.classList != "selected" && item.target.src != "public/exercise-1/tick.svg") {
		valuesArray.unshift(item.target.alt);
        console.log(valuesArray)
	}
	if (valuesArray.length >= 2) {
		myAttepts.textContent = ++countAttemps;
		if (valuesArray[1] == valuesArray[0]) {
			myScore.textContent = ++countScore;
			item.target.src = "public/exercise-1/tick.svg"
		}
		valuesArray.splice(0, 2);
	}
	// console.log(valuesArray)
};



myGrid.addEventListener("click", (event) => {
	let item = event.target;
	// console.log(item);
	
	addValueToArray(event);
    item.classList.add("selected");
});
