import renderPageWithWeatherData from "./renderPage";

function fetchWeatherData(location) {
  const response = fetch(
    `https://api.weatherapi.com/v1/current.json?key=3695df83e057409d9f852317232008&q=${location}`,
    {
      mode: "cors",
    },
  );
  const weatherData = response
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          `Unexpected status code: ${response.status} ${response.statusText}`,
        );
      }
    })
    .then((response) => {
      return response;
    })
    .catch((reason) => {
      return reason.message;
    });

  return weatherData;
}

export default function searchWeatherForLocation(location) {
  const weatherData = fetchWeatherData(location);
  renderPageWithWeatherData(weatherData);
}
