const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards")

async function getProphetData() {
	const response = await fetch(url); // Await Fetch()
	const data = await response.json(); // Await JSON
	displayProphets(data.prophets);
}

getProphetData();

function displayProphets(prophets) {
	prophets.forEach(prophet => {
		const card = document.createElement("section");
		const fullName = document.createElement("h2");
		const portratit = document.createElement("img");

		fullName.textContent = `${prophet.name} ${prophet.lastname}`;

		portratit.setAttribute("src", prophet.imageurl);
		portratit.setAttribute("alt", `${prophet.name} ${prophet.lastname}`);
		portratit.setAttribute("loading", `lazy`);
		portratit.setAttribute("width", `340`);
		portratit.setAttribute("height", `440`);

		card.appendChild(fullName);
		card.appendChild(portratit);

		cards.appendChild(card);
	});
}