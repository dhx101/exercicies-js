const countries = [
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const myBody = document.querySelector("body");
const myUl = document.createElement("ul");

countries.forEach((item) => {
	const myIl = document.createElement("li");
	const myH4 = document.createElement("h4");
	const myImg = document.createElement("img");
	myH4.textContent = item.title;
	myImg.setAttribute("src", item.imgUrl);
	myIl.appendChild(myH4);
	myIl.appendChild(myImg);
    myUl.appendChild(myIl);

});

myBody.appendChild(myUl)