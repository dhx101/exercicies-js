const movies = [
	{ name: "Your Name", durationInMinutes: 130 },
	{ name: "Pesadilla antes de navidad", durationInMinutes: 225 },
	{ name: "Origen", durationInMinutes: 165 },
	{ name: "El señor de los anillos", durationInMinutes: 967 },
	{ name: "Solo en casa", durationInMinutes: 214 },
	{ name: "El jardin de las palabras", durationInMinutes: 40 },
];
let smallMovieArray = []
let mediumMovieArray = []
let bigMovieArray = []


for ( i = 0 ; i < movies.length; i++) {
    if (movies[i].durationInMinutes < 100) {
        console.log(`${movies[i].name} es una película pequeña.`)
        smallMovieArray.push(movies[i])
    } else if (movies[i].durationInMinutes < 200 ) {
        console.log(`${movies[i].name} es una película mediana.`)
        mediumMovieArray.push(movies[i])
    } else {
        console.log(`${movies[i].name} es una película grande`)
        bigMovieArray.push(movies[i])
    }
} 

console.log(smallMovieArray)
console.log(mediumMovieArray)
console.log(bigMovieArray)