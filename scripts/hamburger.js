// Hamburger Menu
const menuBtn = document.querySelector("#menu")
const navigation = document.querySelector(".navigation")

menuBtn.addEventListener("click", () => {
	menu.classList.toggle('open');
	navigation.classList.toggle('open');
})