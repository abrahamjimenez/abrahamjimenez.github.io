const cardBtn = document.querySelector(".directory__card");
const listBtn = document.querySelector(".directory--list");

const folderContainer = document.querySelector(".card--view");

cardBtn.addEventListener("click", function() {
	folderContainer.classList = "card--view";
});

listBtn.addEventListener("click", function() {
	folderContainer.classList = "list--view";
});