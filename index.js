var container = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function randomNum() {
	return Math.floor(Math.random() * 15 + 1);
}

function changeCol() {
	var backGround = container[randomNum()] + container[randomNum()] + container[randomNum()] + container[randomNum()] + container[randomNum()] + container[randomNum()];
	var buttonCol = container[randomNum()] + container[randomNum()] + container[randomNum()] + container[randomNum()] + container[randomNum()] + container[randomNum()];
	var head = container[randomNum()] + container[randomNum()] + container[randomNum()] + container[randomNum()] + container[randomNum()] + container[randomNum()];
	var border = container[randomNum()] + container[randomNum()] + container[randomNum()] + container[randomNum()] + container[randomNum()] + container[randomNum()];
	
	document.querySelector("body").style.backgroundColor = "#" + backGround;
	document.querySelector("h1").style.color = "#" + head;
	document.querySelector("h1").textContent = "#" + backGround;
	document.querySelector("footer").innerHTML = "Created By Bhoumik.P";
	document.querySelector("button").style.backgroundColor = "#" + buttonCol;
	document.querySelector("button").style.border = "2px solid #" + border;
	document.querySelectorAll("p")[0].textContent = "H1   : #" + head;
	document.querySelectorAll("p")[0].style.color = "#" + head;
	document.querySelectorAll("p")[1].textContent = "BTN : #" + buttonCol;
	document.querySelectorAll("p")[1].style.color = "#" + buttonCol;
	document.querySelectorAll("p")[2].textContent = "BORDER : #" + border;
	document.querySelectorAll("p")[2].style.color = "#" + border;
}


	document.querySelector("button").addEventListener("click", changeCol);
	document.addEventListener("keydown", function(event) {
		if (event.key == "Enter") {
			changeCol();
		}
	})
