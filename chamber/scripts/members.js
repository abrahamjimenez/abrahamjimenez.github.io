const url = "https://abrahamjimenez.github.io/wdd230/data/members.json";

async function apiFetch() {
	const response = await fetch(url);
	const data = await response.json();
	// console.log(data)
	displayData(data);
}

function displayData(data) {
	const companies = data.companies
	
	companies.forEach(company => {
		const image = document.createElement("img");
		image.src = `images/${company.image}`
		image.alt = "hi"
		
		console.log(image)
	})
}

apiFetch();