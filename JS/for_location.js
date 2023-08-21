const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "da9d40a4e5msh15e518d94c8f962p13aca0jsn92ec48943b48",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const displayWeatherData = (weatherData) => {
  const { temp, humidity, min_temp, max_temp, wind_speed, sunrise, sunset } =
    weatherData;

  document.getElementById("temp").textContent = temp;
  document.getElementById("humidity").textContent = humidity;
  document.getElementById("min_temp").textContent = min_temp;
  document.getElementById("max_temp").textContent = max_temp;
  document.getElementById("wind_speed").textContent = wind_speed;
  document.getElementById("sunrise").textContent = sunrise;
  document.getElementById("sunset").textContent = sunset;
};

const getWeatherByGeolocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetch(
          `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=${lat}&lon=${lon}`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            displayWeatherData(response);
          })
          .catch((err) => console.error(err));
      },
      (error) => {
        console.error("Geolocation error:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};

getWeatherByGeolocation();
