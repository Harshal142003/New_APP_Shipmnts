const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "da9d40a4e5msh15e518d94c8f962p13aca0jsn92ec48943b48",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
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
};
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

const getWe = (city, i) => {
  // cityName.innerHTML=city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      document.getElementById("tableOther").rows[i].cells[6].innerHTML =
        response.temp;
      document.getElementById("tableOther").rows[i].cells[1].innerHTML =
        response.humidity;
      document.getElementById("tableOther").rows[i].cells[3].innerHTML =
        response.min_temp;
      document.getElementById("tableOther").rows[i].cells[2].innerHTML =
        response.max_temp;
      document.getElementById("tableOther").rows[i].cells[7].innerHTML =
        response.wind_speed;
      document.getElementById("tableOther").rows[i].cells[4].innerHTML =
        response.sunrise;
      document.getElementById("tableOther").rows[i].cells[5].innerHTML =
        response.sunset;
    })
    .catch((err) => {
      console.error(err);
      if (err.message.includes("data not available")) {
        console.log("The API does not have data for this place.");
      } else {
        console.log("An error occurred while fetching data.");
      }
    });
};

var map1 = new Map([
  [1, "Mumbai"],
  [2, "boston"],
  [3, "lucknow"],
  [4, "kolkata"],
  [5, "gujarat"],
  [6, "mumbai"],
]);

for (let i = 1; i <= 6; i++) {
  getWe(map1.get(i), i);
}
