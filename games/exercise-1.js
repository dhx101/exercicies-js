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
const valuesArray = [];
let countScore = 0;
let countAttemps = 0;
cardArray.forEach((item) => {
	const myCard$$ = document.createElement("div");
	const myImg$$ = document.createElement("img");
	myCard$$.appendChild(myImg$$);
	myGrid.appendChild(myCard$$);
	myImg$$.setAttribute("src", item.img);
	myImg$$.setAttribute("alt", item.name);

	myCard$$.addEventListener("click", () => {
		addValueToArray(myImg$$, myCard$$);
	});
});

const addValueToArray = (item) => {
	console.log(item.classList == "selected");
	if (item.classList != "selected" && !item.src.includes("tick.svg")) {
		item.classList.add("selected");
		valuesArray.unshift(item);
	}
	if (valuesArray.length >= 2) {
		myAttepts.textContent = ++countAttemps;
		setTimeout(
			() => {
				if (valuesArray[0].src == valuesArray[1].src) {
					myScore.textContent = ++countScore;
					valuesArray[0].src = "public/exercise-1/tick.svg";
					valuesArray[1].src = "public/exercise-1/tick.svg";
				} else {
					valuesArray[0].classList.remove("selected");
					valuesArray[1].classList.remove("selected");
				}
				valuesArray.splice(0, 2);
			},
			500,
			valuesArray
		);
	}
};
