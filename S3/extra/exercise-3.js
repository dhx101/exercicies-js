const myDiv = document.querySelector("[data-function=printHere]");
const myUl = document.createElement("ul");

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

myDiv.appendChild(myUl);

cars.forEach((item) => {
    const myIl = document.createElement('li')
    myIl.textContent = item;
    myUl.appendChild(myIl)
})