export default function renderPageWithWeatherData(weatherData) {
  weatherData.then((weather) => {
    displayMainResults(weather);
  });
}

function displayMainResults(weather) {
  console.log(weather);

  const city = document.querySelector(".city");
  city.textContent = "";
  city.textContent = weather.location.name;

  const country = document.querySelector(".country");
  country.textContent = "";
  country.textContent = weather.location.country;

  const dateTime = document.querySelector(".date-time");
  dateTime.textContent = "";
  dateTime.textContent = weather.location.localtime;

  const temp = document.querySelector(".temp");
  temp.textContent = "";
  temp.textContent = weather.current.temp_c;

  const weatherIcon = document.querySelector(".icon");
  weatherIcon.src = "";
  weatherIcon.src = weather.current.condition.icon;

  const condition = document.querySelector(".condition");
  condition.textContent = "";
  condition.textContent = weather.current.condition.text;

  const feelsLike = document.querySelector(".feels-like");
  feelsLike.textContent = "";
  feelsLike.textContent = `Feels like: ${weather.current.feelslike_c}`;
}
