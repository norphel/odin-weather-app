export default function renderPageWithWeatherData(weatherData) {
  weatherData.then((weather) => {
    if (weather.current === undefined || weather.location === undefined) {
      displayMainResults("Error");
    } else {
      displayMainResults(weather);
    }
  });
}

function displayMainResults(weather) {
  const city = document.querySelector(".city");
  const country = document.querySelector(".country");
  const dateTime = document.querySelector(".date-time");
  const temp = document.querySelector(".temp");
  const weatherIcon = document.querySelector(".icon");
  const condition = document.querySelector(".condition");
  const feelsLike = document.querySelector(".feels-like");

  if (weather === "Error") {
    city.textContent = "";
    city.textContent = "Location Not Found!!";
    country.textContent = "";
    dateTime.textContent = "";
    temp.textContent = "";
    weatherIcon.classList.remove("active");
    weatherIcon.classList.add("inactive");
    weatherIcon.src = "";
    condition.textContent = "";
    feelsLike.textContent = "";
  } else {
    city.textContent = "";
    city.textContent = weather.location.name;

    country.textContent = "";
    country.textContent = weather.location.country;

    dateTime.textContent = "";
    dateTime.textContent = weather.location.localtime;

    temp.textContent = "";
    temp.textContent = weather.current.temp_c;

    weatherIcon.classList.remove("inactive");
    weatherIcon.classList.add("active");
    weatherIcon.src = "";
    weatherIcon.src = weather.current.condition.icon;

    condition.textContent = "";
    condition.textContent = weather.current.condition.text;

    feelsLike.textContent = "";
    feelsLike.textContent = `Feels like: ${weather.current.feelslike_c}`;
  }
}
