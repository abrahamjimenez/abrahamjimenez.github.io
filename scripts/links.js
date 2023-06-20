const baseURL = "https://abrahamjimenez.github.io/wdd230/";
const linksURL = "https://abrahamjimenez.github.io/wdd230/data/links.json";

const learningActivies = document.querySelector("#learning__activities")

async function getLinks() {
	const response = await fetch(linksURL);
	const data = await response.json();
	// console.log(data);

	displayLinks(data);
}

function displayLinks(weeks) {
  weeks.weeks.forEach(week => {
	const weekElement = document.createElement('div');
	const weekParagraphElement = document.createElement("p");
	weekParagraphElement.textContent = `${week.week}: `;

	const linksContainer = document.createElement('div');
	const links = week.links.map(link => {
	  const linkElement = document.createElement('a');
	  linkElement.href = link.url;
	  linkElement.textContent = link.title;
	  return linkElement.outerHTML;
	});

	linksContainer.innerHTML = links.join(' | ');
	weekElement.appendChild(weekParagraphElement);
	weekElement.appendChild(linksContainer);
	learningActivies.appendChild(weekElement);
  });
}

getLinks();