const diaryApi = async () => {
	let results = await fetch("http://localhost:3000/diary");
	let resJson = await results.json();
	// console.log(resJson);

   let sortedJson = resJson.sort((a,b) => {
    return new Date(a.date) - new Date(b.date);
   })
	// console.log(sortedJson);

    createDiary(sortedJson)
};

let createDiary = (array) => {
	array.forEach((item) => {
		let myDiv = document.createElement("div");
		let myH5 = document.createElement("h5");
		let myH3 = document.createElement("h3");
		let myP = document.createElement("p");
        let deleteBtn =document.createElement('button');
		myH3.textContent = item.title;
		myH5.textContent = item.date;
		myP.textContent = item.description;
        deleteBtn.textContent = "Delete this entry"
		document.body.appendChild(myDiv);
		myDiv.appendChild(myH3);
		myDiv.appendChild(myH5);
		myDiv.appendChild(myP);
        myDiv.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", ()=> {
            document.body.removeChild(myDiv)
        })
	});
};

diaryApi()