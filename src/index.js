//Week4
// Part1 start
function currentDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

var dateElement = document.querySelector("#date");
var currentTime = new Date();
dateElement.innerHTML = currentDate(currentTime);
//Part 1 End

//Week5

//Main-part
function displayWeatherCondition(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function searchCity(city) {
  let apiKey = "2ceada01b7fc7d0d21b702ddd8150d97";
  let cityElement = document.querySelector("#current-city");
  let cityInput = document.querySelector("#city-input");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  event.preventDefault();
  axios.get(apiUrl).then(displayWeatherCondition);
  cityElement.innerHTML = cityInput.value;
}

//Bonus-part
function showWeather(response) {
  let h1 = document.querySelector("h1");
  let h2 = document.querySelector("h2");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `${response.data.name}`;
  h2.innerHTML = `${temperature}°C`;
}

function retrievePosition(position) {
  let apiKey = "2ceada01b7fc7d0d21b702ddd8150d97";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

//Call functions
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

let button = document.querySelector("#current-location");
button.addEventListener("click", getCurrentPosition);
