const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "da9d40a4e5msh15e518d94c8f962p13aca0jsn92ec48943b48",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeatherByGeolocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch(
        `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=${lat}&lon=${lon}`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);

          document.getElementById("temp").innerHTML = response.temp;
          document.getElementById("humidity").innerHTML = response.humidity;
          document.getElementById("min_temp").innerHTML = response.min_temp;
          document.getElementById("max_temp").innerHTML = response.max_temp;
          document.getElementById("wind_speed").innerHTML = response.wind_speed;
          document.getElementById("sunrise").innerHTML = response.sunrise;
          document.getElementById("sunset").innerHTML = response.sunset;
        })
        .catch((err) => console.error(err));
    },
    (error) => {
      console.error("Geolocation error:", error);
    }
  );
};

getWeatherByGeolocation();
