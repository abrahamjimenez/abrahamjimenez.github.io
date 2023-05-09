// Dark Mode
const darkBtn = document.querySelector("#dark");
const main = document.querySelector("main")
const h3 = document.querySelectorAll("h3")
const card = document.querySelectorAll(".card")

// Make all h3 dark
h3.forEach(function(e) {
	e.style.color = 'black'
})



darkBtn.addEventListener("click", function() {

	if (darkBtn.textContent.includes("✔️")) {
		// Make all card borders white
		card.forEach(function(e) {
			e.style.border = "1px solid white"
		})
		main.style.backgroundColor = "black"
		main.style.color = "white"
		darkBtn.textContent = "❎"
		darkBtn.classList.toggle('darkMode');
	} else {
		// Make all card borders black
		card.forEach(function(e) {
			e.style.border = "1px solid black"
		})
		main.style.color = "black"
		main.style.backgroundColor = "white"
		darkBtn.textContent = "✔️"
		darkBtn.classList.toggle('darkMode');
	}
})