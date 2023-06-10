function timestamp() {
	const timestamp = document.querySelector("#timestamp");
	const date = new Date();
	
	timestamp.value = date;
}

document.addEventListener("DOMContentLoaded", timestamp)