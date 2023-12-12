function swap(array, index1, index2) {
	let item1 = array[index1];
	let item2 = array[index2];
    console.log(item1, item2)
	array.splice(index1, 1, item2);
	array.splice(index2, 1, item1);
    console.log(arrayExample)
}

let arrayExample = ["Mesirve", "Cristiano Romualdo", "Fernando Muralla", "Ronalguiño"];

swap(arrayExample, 1, 3);
