const menu = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menu.addEventListener("click", () => {
	menu.classList.toggle('open');
	navigation.classList.toggle('open');
})