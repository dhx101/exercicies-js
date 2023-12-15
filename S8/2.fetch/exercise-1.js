const agifyApi = async () => {
	let response = await fetch("https://api.agify.io?name=michael");
    console.log(response)
	let resJson = await response.json();
    console.log(resJson)
};

agifyApi()