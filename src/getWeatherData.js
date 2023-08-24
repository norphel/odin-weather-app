export default function fetchWeatherData(city) {
  const response = fetch(
    `https://api.weatherapi.com/v1/current.json?key=3695df83e057409d9f852317232008&q=${city}`,
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
