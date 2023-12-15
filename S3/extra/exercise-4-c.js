const countries = [
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const myBody = document.querySelector("body");
const myUl = document.createElement("ul");
myBody.appendChild(myUl);

countries.forEach((item) => {
	const myIl = document.createElement("li");
	const myH4 = document.createElement("h4");
	const myImg = document.createElement("img");
	myH4.textContent = item.title;
	myImg.setAttribute("src", item.imgUrl);
	myIl.appendChild(myH4);
	myIl.appendChild(myImg);

	const myBtn = document.createElement("button");
	myBtn.textContent = "delete this photo";
	myBtn.addEventListener("click", () => {
		myUl.removeChild(myIl);
		myUl.removeChild(myBtn)
	});
	myIl.appendChild(myBtn);

	myUl.appendChild(myIl);
});

const removeBtn = document.querySelector("button");
const removeLastItem = () => {
	const lastItem = document.querySelector("li:last-child");
	myUl.removeChild(lastItem);
};
removeBtn.addEventListener("click", removeLastItem);
