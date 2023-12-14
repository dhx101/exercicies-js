const suma = (a = 10, b = 5) => {
	return a + b;
};
console.log(suma(), suma(1), suma(5,3))