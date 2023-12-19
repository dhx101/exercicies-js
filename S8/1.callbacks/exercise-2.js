const userAnwsers = [];

function confirmExample(string) {
	return confirm(string);
}

function promptExample(string) {
	return prompt(string);
}

function father(string, callback) {
	userAnwsers.push(callback(string));
}

father('Hola', confirmExample)
father('Adios', confirmExample)
father("que esesto", promptExample)
father('ayuda',promptExample)
console.log(userAnwsers);