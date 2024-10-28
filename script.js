document.addEventListener('DOMContentLoaded', () => {
    const map = document.getElementById('india-map');

    // Add click event to the map
    map.addEventListener('click', (event) => {
        // Logic to determine which state was clicked
        // For simplicity, let's assume we have a function getStateData that returns data based on the click
        const stateData = getStateData(event);
        alert(`Water scarcity data for ${stateData.name}: ${stateData.data}`);
    });

    // Fetch weather data
    fetchWeatherData();
});

// Function to fetch weather data from an API
function fetchWeatherData() {
    const apiKey = '5f3c7dcaadd94be3d5ef0afe7651f7de'; // Replace with your actual API key
    const city = 'Delhi'; // Example city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `Temperature: ${data.main.temp}°C, Weather: ${data.weather[0].description}`;
            document.getElementById('weather-info').innerText = weatherInfo;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-info').innerText = 'Failed to load weather data.';
        });
}

