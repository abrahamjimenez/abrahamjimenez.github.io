const pageVisits = document.querySelector("#page-visits");

if (localStorage.getItem("pageCounter")) {
	var count = parseInt(localStorage.getItem("pageCounter"));
	count++;
	localStorage.setItem("pageCounter", count);
	pageVisits.textContent = `Number of Visits: ${localStorage.getItem("pageCounter")}`;
} else {
	localStorage.setItem("pageCounter", 1);
	pageVisits.textContent = `Number of Visits: This is your first time here! Welcome`;
}