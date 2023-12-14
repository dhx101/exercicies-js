let myBody = document.querySelector('body')
let mySecondDiv = document.querySelector("div:nth-child(2)");
let myP = document.createElement('p');
myP.textContent = 'Voy en medio!';
myBody.insertBefore(myP, mySecondDiv)

console.log(mySecondDiv)
