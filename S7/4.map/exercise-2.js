const users = [
	{ id: 1, name: "Abel" },
	{ id: 2, name: "Julia" },
	{ id: 3, name: "Pedro" },
	{ id: 4, name: "Amanda" },
];

const newArray = users.map((item) => {
    console.log(item.name.split(""));
	if (item.name.split("")[0] == "A") {
		item.name = "Anacleto";
		return item.name;
	}
    return item.name
});
console.log(newArray);
