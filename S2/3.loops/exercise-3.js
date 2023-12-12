const placesToTravel = [
	{ id: 5, name: "Japan" },
	{ id: 11, name: "Venecia" },
	{ id: 23, name: "Murcia" },
	{ id: 40, name: "Santander" },
	{ id: 44, name: "Filipinas" },
	{ id: 59, name: "Madagascar" },
];
console.log(placesToTravel);

let newArray = []

// for (let i = 0; i< placesToTravel.length; i++) {
//     if (placesToTravel[i].id != 11 && placesToTravel[i].id != 40) {
//         newArray.push(placesToTravel[i])
//     }
// }
// console.log(newArray)

for (let place of placesToTravel) {
	if (place.id != 40 && place.id != 11) {
		newArray.push(place)
	} 
		
}
console.log(newArray)