document.querySelectorAll('.navBtn').forEach(button => {
    button.addEventListener('click', () => { window.location.href = button.dataset.link });
});
const weatherElement = document.getElementById("datetime");

const apiKey = "693634fe8da64884988506a726f576e9";
const city = "Winston-Salem";

fetch(`https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`)
  .then(response => response.json())
  .then(data => {
    console.log(data); // helps debug

    const temp = data.current.temperature * 9/5 + 32; // Convert Celsius to Fahrenheit
    const description = data.current.weather_descriptions[0];

    weatherElement.textContent = `${city}: ${temp}°F, ${description}`;
  })
  .catch(error => {
    weatherElement.textContent = "Unable to load weather data.";
    console.error(error);
  });
