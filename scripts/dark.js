// Dark Mode
const darkBtn = document.querySelector("#dark");
const main = document.querySelector("main")

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