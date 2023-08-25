import fetchWeatherData from "./getWeatherData";

import "normalize.css";
import "./styles/styles.css";

const weatherData = fetchWeatherData("New Delhi");

console.log(weatherData);
