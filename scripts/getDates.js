// Current year
let current_year = document.querySelector(".current-year");
current_year.textContent = new Date().getFullYear();

// Last modified
let last_modified = document.querySelector("#lastModified");
last_modified.textContent = `Last Modification: ${Date(document.last_modified)}`
// TODO: Fix this crap