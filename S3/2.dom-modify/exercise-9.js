let myDivs = document.querySelectorAll(".fn-insert-here");


myDivs.forEach((item) => {
    let myP = document.createElement("p");
    myP.textContent = "Voy dentro!";
    item.appendChild(myP)
    console.log(myP)
})
