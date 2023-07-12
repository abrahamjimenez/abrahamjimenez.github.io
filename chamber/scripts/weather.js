const forecastUrl =
  'https://api.openweathermap.org/data/2.5/forecast?lat=43.82&lon=-111.79&appid=ce8e98408d5f839cb2ea42a22f473e5a';

const weather = document.querySelector('.weather');
const captionDesc = document.querySelector('figcaption');
const weatherSection = document.querySelector('.weather__card');

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
    const temp = forecast.main.temp;
    const icon = forecast.weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
    const desc = forecast.weather[0].description;

    const div = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const h3 = document.createElement('h3');
    const image = document.createElement('img');

    p.classList.add('weahter--desc');
    p2.classList.add('weahter--temp');

    var date = new Date(millisecondsTime);
    const formattedDate = date.toLocaleString();
    const hours = date.getHours();

    // This will get all 6 hours AND 3 days!
    if (hours == 6 && dayCounter < 3) {
      dayCounter++;

      const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];

      const currentDay = daysOfWeek[date.getDay()];

      // todo: convert to kelvin -> fahrenheit
      const fahrenheitTemperature = kelvinToFahrenheit(temp);
      const roundedFahrenheitTemp = fahrenheitTemperature.toFixed(2);

      p.textContent = desc;
      p2.textContent = roundedFahrenheitTemp;
      h3.textContent = currentDay;

      image.setAttribute('src', iconsrc);
      image.setAttribute('alt', desc);

      div.appendChild(h3);
      div.appendChild(p);
      div.appendChild(p2);
      div.appendChild(image);
      weatherSection.appendChild(div);
    }
  });
}

function kelvinToFahrenheit(kelvin) {
  const fahrenheit = (kelvin - 273.15) * (9 / 5) + 32;
  return fahrenheit;
}

forecastFetch();
