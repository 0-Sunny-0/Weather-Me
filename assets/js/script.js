// Define variables

// api key
const key = "6537eee7248a70fa02f64336ea0d6b50";

// search button
const searchBtn = document.getElementById('searchBTN');

// variables for city data
const cityList = JSON.parse(localStorage.getItem('cities')) || [];
const cityHistory = document.getElementById('city-history');
const currentWeather = document.getElementById('current-day-weather');
const weeklyForecast = document.getElementById('5dayForecast');

