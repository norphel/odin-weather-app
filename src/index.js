function fetchWeatherData(city) {
  const response = fetch(
    `https://api.weatherapi.com/v1/current.json?key=3695df83e057409d9f852317232008&q=${city}`,
    {
      mode: "cors",
    },
  );
  response
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          `Unexpected status code: ${response.status} ${response.statusText}`,
        );
      }
    })
    .then((weatherData) => {
      console.log(weatherData);
    })
    .catch((reason) => {
      console.log(reason.message);
    });
}

fetchWeatherData(prompt("City: ", "New Delhi"));
