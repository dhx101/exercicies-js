let myBody = document.querySelector("body");
let MyUl = document.createElement("ul");
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

myBody.appendChild(MyUl);
apps.forEach((item) => {
	let MyIl = document.createElement("li");
	MyIl.textContent = item;
    MyUl.appendChild(MyIl)
});
