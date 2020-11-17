let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let ul = document.querySelector("#myList");
	let element = document.createElement("li");
	element.innerHTML = "Fourth element";
	ul.appendChild(element);
});
