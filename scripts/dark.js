// Dark Mode
const darkBtn = document.querySelector("#dark");
const main = document.querySelector("main")
const h3 = document.querySelectorAll("h3")

// Make all h3 dark
h3.forEach(function(e) {
	e.style.color = 'black'
})


darkBtn.addEventListener("click", function() {

	if (darkBtn.textContent.includes("✔️")) {		
		main.style.backgroundColor = "black"
		main.style.color = "white"
		darkBtn.textContent = "❎"
		darkBtn.classList.toggle('darkMode');
	} else {
		main.style.color = "black"
		main.style.backgroundColor = "white"
		darkBtn.textContent = "✔️"
		darkBtn.classList.toggle('darkMode');
	}
})