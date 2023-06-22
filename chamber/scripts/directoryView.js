// This file changes the .directory--btn--container children to .card--view or .list--view
const cardBtn = document.querySelector(".directory__card");
const listBtn = document.querySelector(".directory__list");

const folderContainer = document.querySelector(".card--view");

cardBtn.addEventListener("click", function() {
	folderContainer.classList = "card--view";
});

listBtn.addEventListener("click", function() {
	folderContainer.classList = "list--view";
});