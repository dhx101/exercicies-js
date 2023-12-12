const alumns = [
	{ name: "Pepe Viruela", T1: false, T2: false, T3: true },
	{ name: "Lucia Aranda", T1: true, T2: false, T3: true },
	{ name: "Abel Cabeza", T1: false, T2: true, T3: true },
	{ name: "Alfredo Blanco", T1: false, T2: false, T3: false },
	{ name: "Raquel Benito", T1: true, T2: true, T3: true },
];

let trimestresAprobados = 0;
// for (let i = 0; i < alumns.length; i++) {

// }
for (let notas of alumns) {
	// console.log(notas)

	if (notas.T1 == true) {
		trimestresAprobados++;
	}
	if (notas.T2 == true) {
		trimestresAprobados++;
	}
	if (notas.T3 == true) {
		trimestresAprobados++;
	}
	if (trimestresAprobados >= 2) {
		notas.isApproved = true;
	} else {
		notas.isApproved = false;
	}
	trimestresAprobados = 0;
}
console.log(alumns)