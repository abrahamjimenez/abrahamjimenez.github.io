// Current year
let current_year = document.querySelector(".current-year");
current_year.textContent = new Date().getFullYear();

// Last modified
let last_modified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modification: ${last_modified}`;