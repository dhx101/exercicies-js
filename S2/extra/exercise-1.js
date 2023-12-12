const movies = [
	{ title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
	{ title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
	{ title: "Solo en Whatsapp", duration: 223, categories: ["comedia", "thriller"] },
	{
		title: "El gato con guantes",
		duration: 111,
		categories: ["comedia", "aventura", "animación"],
	},
];
let categorias = [];

for (let peli of movies) {
    // console.log(peli.categories[0])
    for (let i = 0; i < peli.categories.length; i++ ){
        // console.log(peli.categories[i])
        if (!categorias.includes(peli.categories[i])) {
            categorias.push(peli.categories[i])
        }
        
    }
    // console.log("-------")
}
console.log(categorias)