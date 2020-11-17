window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	for (let i = 0; i < countries.length; i++) {
		let pais = countries[i];
		let opcion = document.createElement("option");
		opcion.innerHTML = pais;
		document.querySelector("#mySelect").appendChild(opcion);
	}

	document.querySelector("#mySelect").addEventListener("change", e => {
		alert(e.target.value);
	});
};
