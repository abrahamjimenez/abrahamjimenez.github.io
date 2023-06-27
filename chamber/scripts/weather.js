const forecastUrl =
  'https://api.openweathermap.org/data/2.5/forecast?lat=43.82&lon=-111.79&appid=ce8e98408d5f839cb2ea42a22f473e5a';
const url =
  'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&units=imperial&appid=ce8e98408d5f839cb2ea42a22f473e5a';

const weather = document.querySelector('.weather');
const weatherLocation = document.querySelector('.weather-location');
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
  }
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

// apiFetch();

async function forecastFetch() {
  const forecastResponse = await fetch(forecastUrl);
  const forecastData = await forecastResponse.json();

  displayForecast(forecastData);
}

let dayCounter = 0;
function displayForecast(data) {
  data.list.forEach((forecast) => {
    const secondsTime = forecast.dt;
    const millisecondsTime = secondsTime * 1000;
    var date = new Date(millisecondsTime);
    const formattedDate = date.toLocaleString();

    // console.log(date.getDate());
    // console.log(date.getHours()); // TDODO: Get 6!
    const hours = date.getHours();

    // This will get all 6 hours AND 3 days!
    if (hours == 6 && dayCounter < 3) {
      dayCounter++;
      console.log(hours);
    }
    // console.log(formattedDate)
  });
}

forecastFetch();
