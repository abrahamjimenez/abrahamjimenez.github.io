const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&units=imperial&appid=ce8e98408d5f839cb2ea42a22f473e5a';

const weather = document.querySelector(".weather");
const weatherLocation = document.querySelector(".weather-location");
const currentTemp = document.querySelector('.current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetch() {
	const response = await fetch(url);
	if (response.ok) {
		const data = await response.json();

		displayResults(data);
		// console.log(data);
	} else {
		throw Error(await response.text());
	};
}

function displayResults(data) {
	currentTemp.innerHTML = `${data.main.temp}&deg;F`;
	const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
	let desc = data.weather[0].description;
	weatherIcon.setAttribute('src', iconsrc);
	weatherIcon.setAttribute('alt', desc);
	captionDesc.textContent = `${desc}`;
	weatherLocation.textContent = data.name;
}

apiFetch();

