// Select HTML elements in the document
const weatherLocal = document.querySelector('#town');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#description');
const weatherTemp = document.querySelector('#temperature');

// Create required variables for the URL
const myKey = "944ba44088bb0cafb9c93585c28ba580"
const myLat = "43.65"
const myLong = "-79.40"


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

//   DISPLAY THE JSON DATA ONTO MY WEB PAGE
    function displayResults(data) {
    
    weatherLocal.innerHTML = data.name
    weatherDesc.innerHTML = data.weather[0].description
    weatherTemp.innerHTML = `${data.main.temp}&deg;C`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('SRC', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description)
}
  
  apiFetch();


