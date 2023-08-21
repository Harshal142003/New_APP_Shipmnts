// Define a function to get the 3-day forecast for the selected city
const getForecast = (city) => {
  // Fetch forecast data from your API (replace with your API endpoint)
  fetch(`https://your-api.com/forecast?city=${city}`)
    .then((response) => response.json())
    .then((forecastData) => {
      // Select the forecast container element
      const forecastContainer = document.getElementById("forecastData");

      // Clear any existing forecast data
      forecastContainer.innerHTML = "";

      // Loop through the forecastData and create forecast cards for each day
      forecastData.forEach((day) => {
        // Create a new forecast card element
        const card = document.createElement("div");
        card.classList.add("col");
        card.innerHTML = `
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">${day.date}</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  <small class="text-muted fw-light">${day.weather}</small>
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Temperature: ${day.temperature}°C</li>
                  <li>Min Temperature: ${day.minTemp}°C</li>
                  <li>Max Temperature: ${day.maxTemp}°C</li>
                </ul>
              </div>
            </div>
          `;

        // Append the forecast card to the forecast container
        forecastContainer.appendChild(card);
      });
    })
    .catch((err) => console.error(err));
};

// Call getForecast when clicking the "Submit" button
const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedCity = city.value;
  getWeather(selectedCity);
  getForecast(selectedCity); // Add this line to fetch and display the forecast
});
