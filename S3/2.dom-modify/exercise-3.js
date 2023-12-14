let myDiv = document.createElement("div");
let myBody = document.querySelector("body");

myBody.appendChild(myDiv);
for (let i = 0; i < 6; i++) {
    let MyP = document.createElement("p");
    myDiv.appendChild(MyP);
}