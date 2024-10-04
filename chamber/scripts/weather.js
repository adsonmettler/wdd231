// Select HTML elements in the document
const weatherLocal = document.querySelector('#town');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#description');
const weatherTemp = document.querySelector('#temperature');

// Create required variables for the URL
const myKey = "944ba44088bb0cafb9c93585c28ba580";
const myLat = "43.65";
const myLong = "-79.40";

// Full path using template API URL with coordinates for Toronto, Canada
const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

// To grab the current weather data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// DISPLAY THE JSON DATA ONTO MY WEB PAGE
function displayResults(data) {
    weatherLocal.innerHTML = data.name;
    weatherDesc.innerHTML = data.weather[0].description;
    weatherTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`; // Round temperature to whole number
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
}

apiFetch();

// Select HTML elements for forecast
const forecastTown = document.querySelector('#forecast-town');
const forecastTempToday = document.querySelector('#forecast-temp-today');
const forecastTempNext = document.querySelector('#forecast-temp-next');
const forecastTempAfter = document.querySelector('#forecast-temp-after');
const dayNameNext = document.querySelector('#day-name-next');
const dayNameAfter = document.querySelector('#day-name-after');

// Forecast API URL
const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

// Fetch weather forecast data
async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data); // Call function to display data
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to get day name from a Date object
function getDayName(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

// DISPLAY FORECAST DATA ONTO THE WEB PAGE
function displayForecast(data) {
    // Extract forecast data for 3-hour intervals (current and future days)
    const todayForecast = data.list[0]; // First item for today
    const nextDayForecast = data.list[8]; // Roughly 24 hours later
    const dayAfterNextForecast = data.list[16]; // Roughly 48 hours later
    
    // Display town name
    forecastTown.innerHTML = data.city.name;

    // Display today's forecast temperature (rounded to whole number)
    forecastTempToday.innerHTML = `${Math.round(todayForecast.main.temp)}&deg;C`;

    // Calculate and display the day names for the next two days
    const today = new Date(); // Get current date
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1); // Calculate the next day
    const dayAfterNext = new Date(today);
    dayAfterNext.setDate(today.getDate() + 2); // Calculate the day after the next

    // Update day names for tomorrow and the day after tomorrow
    dayNameNext.innerHTML = `${getDayName(nextDay)}: ${Math.round(nextDayForecast.main.temp)}&deg;C`; // Combined output
    dayNameAfter.innerHTML = `${getDayName(dayAfterNext)}: ${Math.round(dayAfterNextForecast.main.temp)}&deg;C`; // Combined output

    // Display forecast temperatures for the next two days (rounded to whole number)
    forecastTempNext.innerHTML = `${Math.round(nextDayForecast.main.temp)}&deg;C`;
    forecastTempAfter.innerHTML = `${Math.round(dayAfterNextForecast.main.temp)}&deg;C`;
}

// Call the forecast API function
fetchForecast();
