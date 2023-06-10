function timestamp() {
	const timestamp = document.querySelector("#timestamp");
	const date = new Date();
	
	timestamp.value = date;
	console.log(timestamp.value)
}

document.addEventListener("DOMContentLoaded", timestamp)