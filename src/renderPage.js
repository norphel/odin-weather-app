import precipitationIcon from "./assets/precipitation.png";
import humidityIcon from "./assets/humidity.png";
import windSpeedIcon from "./assets/wind.png";
import windDirectionIcon from "./assets/windDirection.png";

export default function renderPageWithWeatherData(weatherData) {
  weatherData.then((weather) => {
    if (weather.current === undefined || weather.location === undefined) {
      displayMainResults("Error");
      displayOtherResults("Error");
    } else {
      displayMainResults(weather);
      displayOtherResults(weather);
    }
  });
}

function displayMainResults(weather) {
  const mainResults = document.getElementById("mainResults");

  if (weather === "Error") {
    mainResults.innerHTML = "";
    mainResults.textContent = "Location Not Found";
  } else {
    mainResults.innerHTML = "";
    mainResults.classList.add("active");

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

function displayOtherResults(weather) {
  const otherResults = document.getElementById("otherResults");
  if (weather === "Error") {
    otherResults.innerHTML = "";
    otherResults.classList.remove("active");
  } else {
    otherResults.innerHTML = "";
    otherResults.classList.add("active");

    const precipitation = document.createElement("div");
    precipitation.classList.add("precipitation");
    const prepTitle = document.createElement("p");
    prepTitle.textContent = "Precipitation (mm)";
    const prepIcon = document.createElement("img");
    prepIcon.classList.add("icon");
    prepIcon.setAttribute("alt", "precipitation icon");
    prepIcon.setAttribute("src", `${precipitationIcon}`);
    const prepmm = document.createElement("p");
    prepmm.textContent = weather.current.precip_mm;

    precipitation.appendChild(prepTitle);
    precipitation.appendChild(prepIcon);
    precipitation.appendChild(prepmm);

    const humidity = document.createElement("div");
    humidity.classList.add("humidity");
    const humidityTitle = document.createElement("p");
    humidityTitle.textContent = "Humidity";
    const humidIcon = document.createElement("img");
    humidIcon.classList.add("icon");
    humidIcon.setAttribute("alt", "humidity icon");
    humidIcon.setAttribute("src", `${humidityIcon}`);
    const humidPercent = document.createElement("p");
    humidPercent.textContent = weather.current.humidity;

    humidity.appendChild(humidityTitle);
    humidity.appendChild(humidIcon);
    humidity.appendChild(humidPercent);

    const windSpeed = document.createElement("div");
    windSpeed.classList.add("wind-speed");
    const windSpeedTitle = document.createElement("p");
    windSpeedTitle.textContent = "Wind Speed (kph)";
    const windIcon = document.createElement("img");
    windIcon.classList.add("icon");
    windIcon.setAttribute("alt", "wind speed icon");
    windIcon.setAttribute("src", `${windSpeedIcon}`);
    const windSpeedkph = document.createElement("p");
    windSpeedkph.textContent = weather.current.wind_kph;

    windSpeed.appendChild(windSpeedTitle);
    windSpeed.appendChild(windIcon);
    windSpeed.appendChild(windSpeedkph);

    const windDirection = document.createElement("div");
    windDirection.classList.add("wind-direction");
    const windDirectionTitle = document.createElement("p");
    windDirectionTitle.textContent = "Wind Direction";
    const windDirIcon = document.createElement("img");
    windDirIcon.classList.add("icon");
    windDirIcon.setAttribute("alt", "wind direction icon");
    windDirIcon.setAttribute("src", `${windDirectionIcon}`);
    const windDir = document.createElement("p");
    windDir.textContent = weather.current.wind_dir;

    windDirection.appendChild(windDirectionTitle);
    windDirection.appendChild(windDirIcon);
    windDirection.appendChild(windDir);

    otherResults.appendChild(precipitation);
    otherResults.appendChild(humidity);
    otherResults.appendChild(windSpeed);
    otherResults.appendChild(windDirection);
  }
  console.log(weather);
}
