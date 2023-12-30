const tbdoy = document.querySelector('[data-function="board"]');
const imgXUrl = "./public/exercise-4/x.png";
const imgChestUrl = "./public/exercise-4/chest.png";
const imgSkullUrl = "./public/exercise-4/skull.png";
const tSize = prompt("Eligie el tamaño de tu mapa del tesoro");
const attemptsCounter = document.querySelector('[data-function="attempts"]');
let randomLocationFila = Math.floor(Math.random() * tSize);
let randomLocationColumna = Math.floor(Math.random() * tSize);
console.log(randomLocationFila, randomLocationColumna);

for (let i = 0; i < tSize; i++) {
	if (i == randomLocationFila) {
		const fila = document.createElement("div");
		tbdoy.appendChild(fila);
		for (let i = 0; i < tSize; i++) {
			if (i == randomLocationColumna) {
				const columna = document.createElement("div");
				const myImg$$ = document.createElement("img");
				myImg$$.setAttribute("src", imgXUrl);
				columna.appendChild(myImg$$);
				fila.appendChild(columna);
				myImg$$.addEventListener("click", () => {
					myImg$$.setAttribute("src", imgChestUrl);
					setTimeout(() => {
						alert("You Win!");
					}, 100);
					attemptsCounter.textContent =
						Number(attemptsCounter.textContent) + 1;
				});
			} else {
				const columna = document.createElement("div");
				const myImg$$ = document.createElement("img");
				myImg$$.setAttribute("src", imgXUrl);
				columna.appendChild(myImg$$);
				fila.appendChild(columna);
				myImg$$.addEventListener("click", () => {
					myImg$$.setAttribute("src", imgSkullUrl);
					attemptsCounter.textContent =
						Number(attemptsCounter.textContent) + 1;
				});
			}
		}
	} else {
		const fila = document.createElement("div");
		tbdoy.appendChild(fila);
		for (let i = 0; i < tSize; i++) {
			const columna = document.createElement("div");
			const myImg$$ = document.createElement("img");
			myImg$$.setAttribute("src", imgXUrl);
			columna.appendChild(myImg$$);
			fila.appendChild(columna);
			myImg$$.addEventListener("click", () => {
				myImg$$.setAttribute("src", imgSkullUrl);
				attemptsCounter.textContent =
					Number(attemptsCounter.textContent) + 1;
			});
		}
	}
}
