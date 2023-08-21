function convertTemperature() {
  const temperatureElement = document.getElementById("temp");
  const currentTemperatureText = temperatureElement.textContent;
  const currentTemperature = parseFloat(currentTemperatureText);

  // Check the current unit (Celsius or Fahrenheit)
  const isCelsius = currentTemperatureText.includes("°C");

  if (isCelsius) {
    // Convert from Celsius to Fahrenheit
    const fahrenheitTemperature = (currentTemperature * 9) / 5 + 32;
    temperatureElement.textContent = `${fahrenheitTemperature.toFixed(2)}°F`;
  } else {
    // Toggle back to Celsius

    temperatureElement.textContent = `${currentTemperature}°C`;
  }
}

// Add an event listener to the button
const toggleButton = document.getElementById("toggleTemperatureUnit");
toggleButton.addEventListener("click", convertTemperature);
