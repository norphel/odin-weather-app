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
  console.log(weather);

  const mainResults = document.getElementById("mainResults");

  if (weather === "Error") {
    mainResults.innerHTML = "";
    mainResults.textContent = "Location Not Found";
  } else {
    mainResults.innerHTML = "";

    const location = document.createElement("div");
    location.classList.add("location");
    const city = document.createElement("p");
    city.classList.add("city");
    city.textContent = weather.location.name;
    const country = document.createElement("p");
    country.classList.add("country");
    country.textContent = weather.location.country;

    location.appendChild(city);
    location.appendChild(country);

    const dateTime = document.createElement("p");
    dateTime.classList.add("date-time");
    dateTime.textContent = weather.location.localtime;

    const tempIcon = document.createElement("div");
    tempIcon.classList.add("temp-icon");
    const temp = document.createElement("p");
    temp.classList.add("temp");
    temp.textContent = weather.current.temp_c;

    const iconCondition = document.createElement("div");
    iconCondition.classList.add("icon-condition");

    const weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("alt", "weather icon");
    weatherIcon.classList.add("icon");
    weatherIcon.setAttribute("src", `${weather.current.condition.icon}`);

    const condition = document.createElement("p");
    condition.classList.add("condition");
    condition.textContent = weather.current.condition.text;

    iconCondition.appendChild(weatherIcon);
    iconCondition.appendChild(condition);

    tempIcon.appendChild(temp);
    tempIcon.appendChild(iconCondition);

    const feelsLike = document.createElement("p");
    feelsLike.classList.add("feels-like");
    feelsLike.textContent = `Feels like: ${weather.current.feelslike_c}`;

    mainResults.appendChild(location);
    mainResults.appendChild(dateTime);
    mainResults.appendChild(tempIcon);
    mainResults.appendChild(feelsLike);
  }
}
