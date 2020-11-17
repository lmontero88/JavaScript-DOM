// Your code here

const ul = document.querySelector("ul");

function añadir(elemento) {
	let li = document.createElement("li");
	li.innerHTML = "<span><i class='fa fa-trash'></i></span> " + elemento;
	li.querySelector(".fa-trash").addEventListener("click", e => {
		eliminar(e);
	});
	ul.appendChild(li);
}

function eliminar(e) {
	console.log(e);
	let li = e.target.parentNode.parentNode;
	ul.removeChild(li);
}

document.getElementById("addToDo").addEventListener("change", e => {
	añadir(e.target.value);
});

let icons = document.querySelectorAll(".fa-trash");

for (let i = 0; i < icons.length; i++) {
	icons[i].addEventListener("click", e => {
		eliminar(e);
	});
}
