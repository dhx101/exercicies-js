let arrayBusqueda = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

function findArrayIndex(array, text) {
	array.indexOf(text);
	console.log(array.indexOf(text));
}
findArrayIndex(arrayBusqueda, "Salamandra");

function removeItem(array, item) {
	let indexOfItem = array.indexOf(item);
	if (indexOfItem == -1) {
		console.log("Ese item no existe");
	} else {
		array.splice(indexOfItem, 1);
	}
}

removeItem(arrayBusqueda, "Mosquito");
console.log(arrayBusqueda)