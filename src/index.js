import fetchWeatherData from "./getWeatherData";

const weatherData = fetchWeatherData("New Delhi");

console.log(weatherData);
// let data = undefined;
// weatherData.then((value) => {
//   data = value;
// });
// console.log(data);
