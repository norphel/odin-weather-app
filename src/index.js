import searchWeatherForLocation from "./getWeatherData";
import "normalize.css";
import "./styles/styles.css";

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = document.getElementById("location").value;
  console.log(searchWeatherForLocation(location));
});
