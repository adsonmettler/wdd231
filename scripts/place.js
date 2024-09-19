// JavaScript function to get the current year
// Author: Adson Mettler do Nascimento

// Function to get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// To update the copyright year in the footer
document.addEventListener("DOMContentLoaded", function() {
    var yearSpan = document.querySelector("#year span.highlight");
    if (yearSpan) {
		yearSpan.textContent = getCurrentYear();
    }
});


// Function to get the last modified date of the document
document.addEventListener("DOMContentLoaded", function() {
    var lastModifiedDate = document.lastModified;

    // Update the second paragraph in the footer with the last modified date
    var modifiedParagraph = document.querySelector("footer p:nth-of-type(2)");
    if (modifiedParagraph) {
        modifiedParagraph.textContent = "Last modified: " + lastModifiedDate;
    }
});


// Windchill factor and Static variables for WEATHER
// Author: Adson Mettler do Nascimento

// Static values for temperature and wind speed
var temperatureCelsiusValue = 9;
var temperatureCelsiusElement = document.getElementById("temperature-info");
temperatureCelsiusElement.textContent = temperatureCelsiusValue + "°C";
var windSpeedKmhValue = 50;
var windSpeedKmhElement = document.getElementById("wind-speed");
windSpeedKmhElement.textContent = windSpeedKmhValue + " km/h";


// Function to calculate windchill factor
function calculateWindchill(temperatureCelsius, windSpeedKmh) {
    return 13.12 + 0.6215 * temperatureCelsius - 11.37 * Math.pow(windSpeedKmh, 0.16) + 0.3965 * temperatureCelsius * Math.pow(windSpeedKmh, 0.16);
}

// Static values for temperature and wind speed
var temperatureCelsius = 9;
var windSpeedKmh = 50;

// Calculate windchill factor
var windchillFactor = calculateWindchill(temperatureCelsius, windSpeedKmh);

var windchillElement = document.getElementById("windchill-factor");
windchillElement.textContent = windchillFactor.toFixed(1) + "°C";
