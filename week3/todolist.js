let box = document.querySelector('.toDoList');
let input = document.querySelector('.input_text');
let btn = document.querySelector('.addButton');
function newElement() {
	if(input.value===''){
		alert("ERROR: Type something and then continue!")
	}
	else{
		let div = document.createElement("div");
		div.className="item";
		
		let label = document.createElement("label");
	    label.className = "new_text";

	    let check = document.createElement("input");
	    check.type = "checkbox";
	    check.className = "checkbox";
	
	    let span = document.createElement("span");
	    span.innerHTML = input.value;

        let image = document.createElement("img");
        image.className = "image";
        image.src = "Delete.jpg";
        image.addEventListener('click', remove, false);
	

	    box.appendChild(div);
	    div.appendChild(label);
	    label.appendChild(check);
	    label.appendChild(span);
	    div.appendChild(image);

        input.value = null;
    }
}

function remove(){
    this.parentNode.remove();
};

var divs = document.querySelectorAll('.item');
var button = document.querySelectorAll('.image');
for (var i = 0, len = divs.length; i < len; i++) {
    button[i].addEventListener('click', remove, false);
}