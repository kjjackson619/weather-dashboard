var searchBtnEl = document.querySelector("#btn");
var cityNameEl = document.querySelector("#city-name");

var forecastEl = document.querySelector("#forecast");
var weatherContainerEl = document.querySelector("#weather-container");

var chicago = "https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=2cf57f3bc628ca68fe4f4198c9697a35";

var getWeather = function () {

    //api for Chicago
    fetch(chicago).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });
}

var formSubmitHandler = function (event) {
    event.preventDefault();

    var city = cityNameEl.value.trim();

    if (city) {
        getWeather(city);
        cityNameEl.value = "";

    } else {
        alert("Please enter valid city!");
    }
};

var displayWeather = function (name, main) {
    response.json().then(function (chicago) {
        displayWeather(chicago, name);
    });

    forecastEl.textContent = "";
    weatherContainerEl.textContent = main;

    for (var i = 0; i < chicago.length; i++) {
        var dailyForecast = chicago[i];

        var dayEl = document.createElement("div");
        dayEl.innerText = dailyForecast;

        var titleEl = document.createElement("span");
        titleEl.innerText = displayWeather;

        dayEl.appendChild(titleEl);

        forecastEl.appendChild(dailyForecast);
    }
}

searchBtnEl.addEventListener("click", formSubmitHandler);

getWeather();


