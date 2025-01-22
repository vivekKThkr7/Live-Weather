async function fetchWeather() {
    try{
        // Use OpenWeatherMap API or any other service 
        const response = await fetch('https://www.msn.com/en-us/weather/forecast/in-Kathmandu,B%C4%81gmat%C4%AB?loc=eyJsIjoiS2F0aG1hbmR1IiwiciI6IkLEgWdtYXTEqyIsImMiOiJOZXBhbCIsImkiOiJOUCIsImciOiJlbi11cyIsIngiOiI4NS4zMTMiLCJ5IjoiMjcuNzEyIn0%3D&ocid=ansmsnweather&weadegreetype=C');
        const data = await response.json();
        const temperature = data.main.temp;
        document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`; 
    } catch (error) {
        document.getElementById('temperature').innerText = 'Unable to fetch weather data.';
    }
    
}

  // Function to update clocks
  function updateClocks() {
    const now = new Date();

    // Analog clock
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDegree = (hours % 12) * 30 + (minutes / 2);
    const minuteDegree = minutes * 6;
    const secondDegree = seconds * 6;

    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    // Digital clock
    const formattedTime = now.toLocaleTimeString();
    document.getElementById('digital-clock').innerText = formattedTime;

    // Date info
    const formattedDate = now.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('date-info').innerText = formattedDate;
}
// Initialize
fetchWeather();
setInterval(updateClocks, 1000);
