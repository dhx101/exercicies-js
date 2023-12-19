const numbersList = [];

function sum(a, b) {
	return a + b;
}

function substract(a, b) {
	return a - b;
}

function father(a, b, callback) {
	numbersList.push(callback(a, b));
}

father(5,7,sum)
father(1,7,substract)
father(12,7,sum)
father(2,8,substract)
console.log(numbersList);