const square = document.querySelectorAll('[data-function="square"]');
const time = document.querySelector('[data-function="time-left"]');
const score = document.querySelector('[data-function="score"]');
const newModal = document.querySelector('.modal-2')
const getNewSquare = (dificulty) => {
	const randomNumber = Math.floor(Math.random() * square.length);
	const randomSquare = square[randomNumber];
	randomSquare.classList.toggle("b-mole");
	randomSquare.addEventListener(
		"click",
		(myEvent = () => {
			ganarPunto();
			randomSquare.removeEventListener("click", myEvent);
		})
	);
	console.log(myEvent);
	setTimeout(() => {
		randomSquare.classList.toggle("b-mole");
		randomSquare.removeEventListener("click", myEvent);
	}, dificulty);
};

const ganarPunto = () => {
	++score.textContent;
};
const timeDown = () => {
	--time.textContent;
};

const startBtn = document.createElement("button");
startBtn.textContent = "Start game";
const startGameDiv = document.querySelector(".start-game");
startGameDiv.appendChild(startBtn);
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
close.addEventListener("click", () => {
	modal.classList.remove("visible");
});
startBtn.addEventListener("click", () => {
	modal.classList.add("visible");
});

const easy = document.querySelector(".easy");
const medium = document.querySelector(".medium");
const hard = document.querySelector(".hard");

const newGame = (dificulty) => {
	const game = setInterval(getNewSquare, 1000, dificulty);
	const timer = setInterval(timeDown, 1000);
	setTimeout(() => {
		clearInterval(game);
		clearInterval(timer);

		const myP$$ = document.querySelector('.your-score')
		myP$$.textContent = `Your score is ${score.textContent}`
		newModal.classList.add('visible')
	}, 30000);
};
const close2 = document.querySelector('.close-2')
close2.addEventListener('click', ()=> {
	newModal.classList.remove('visible')
})
easy.addEventListener("click", () => {
	newGame(700);
	modal.classList.remove("visible");
});

medium.addEventListener("click", () => {
	newGame(500);
	modal.classList.remove("visible");
});

hard.addEventListener("click", () => {
	newGame(300);
	modal.classList.remove("visible");
});
