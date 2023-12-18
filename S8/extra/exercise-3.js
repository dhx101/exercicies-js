let tiendaApi = async () => {
	let resolveOrders = await fetch("http://localhost:3000/orders");
	let orderJson = await resolveOrders.json();
	// console.log(orderJson);

	let sortedJson = orderJson.sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});

	let resolveProducts = await fetch("http://localhost:3000/products");
	let resProductsJson = await resolveProducts.json();
	// console.log(resProductsJson);

	sortedJson.forEach((item) => {
		console.log(item.products);
		let myDiv = document.createElement("div");
		document.body.appendChild(myDiv);

		item.products.forEach((item) => {
			console.log(item.productId);
			let productsNameById = resProductsJson.find(
				(itemProduct) => itemProduct.id == item.productId
			);
			let productName = productsNameById.name;
			let myProduct = document.createElement("h3");
			let myQuantity = document.createElement("p");
			myProduct.textContent = productName;
			myQuantity.textContent = item.quantity;
			myDiv.appendChild(myProduct);
			myDiv.appendChild(myQuantity);
		});

		let myDate = document.createElement("h5");
		myDate.textContent = item.date;
		myDiv.appendChild(myDate);
	});
	
	// console.log(sortedJson)
	// createShop(resJson)
};

tiendaApi();
