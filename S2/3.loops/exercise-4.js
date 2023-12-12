const toys = [
	{ id: 5, name: "Buzz MyYear" },
	{ id: 11, name: "Action Woman" },
	{ id: 23, name: "Barbie Man" },
	{ id: 40, name: "El gato con Guantes" },
	{ id: 40, name: "El gato felix" },
];
let newArray = [];

for (let juguete of toys) {
	if (!juguete["name"].includes("gato")) {
		newArray.push(juguete);
	}
}
console.log(newArray);
