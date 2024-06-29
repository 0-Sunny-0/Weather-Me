// Define variables

// api key
const key = "6537eee7248a70fa02f64336ea0d6b50";

// link that will be needed, commented out for now
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// search button
const searchBtn = document.getElementById('searchBTN');

// variables for city data
const cityList = JSON.parse(localStorage.getItem('cities')) || [];
const cityHistory = document.getElementById('city-history');
const currentWeather = document.getElementById('current-day-weather');
const weeklyForecast = document.getElementById('5dayForecast');


// Start of Functions

// Updates local storage with previously entered City name and renders to page
// to display previously searched cities. 

function updateLocalStorage(cityName) {
    if(!cityList.includes(cityName)) {
        cityList.push(cityName);
        localStorage.setItem('cities', JSON.stringify(cityList));
        renderCityHistory();
    }
};




// Event Listener for search button

searchBtn.addEventListener('click', function(event){
    event.preventDefault();
});