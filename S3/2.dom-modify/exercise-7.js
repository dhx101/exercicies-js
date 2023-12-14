let classRemove = document.querySelectorAll(".fn-remove-me");
let myBody = document.querySelector("body");
console.log(classRemove);
// for (let i = 0; i < classRemove.length; i++) {
//     myBody.removeChild(classRemove[i])
// }

classRemove.forEach((item) => {
    myBody.removeChild(item)
})
