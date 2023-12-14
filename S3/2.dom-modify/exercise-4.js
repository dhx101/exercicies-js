let myDiv = document.createElement("div");
let MyP = document.createElement("p");
let myBody = document.querySelector("body");
MyP.textContent= 'Soy dinámico!'
myBody.appendChild(myDiv);
myDiv.appendChild(MyP);