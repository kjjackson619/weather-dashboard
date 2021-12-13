//global variables

var apiKey = "2cf57f3bc628ca68fe4f4198c9697a35"
var searchBtn = $(".searchButton");

//store search item

for (var i = 0; i < localStorage.length; i++) {
    var city = localStorage.getItem(i);

    var cityName = $(".list-group");

    cityName.append("<button class='btn btn-secondary d-flex mb-2 disabled'>" + city + "</button>");
}

var keyCount = 0;

//search button functionality

searchBtn.click(function () {

    var searchInputEl = $(".searchInput").val();

    //api calls from Open Weather Map

    var apiWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInputEl + "&Appid=" + apiKey + "&units=imperial";

    var apiForecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInputEl + "&Appid=" + apiKey + "&units=imperial";

    if (searchInputEl == "") {
        console.log(searchInputEl);
    } else {
        $.ajax({
            url: apiWeatherUrl,
            method: "GET",
        }).then(function (response) {

            var local = localStorage.setItem(keyCount, response.name);
            keyCount = keyCount + 1;

            //current weather

            var currentCard = $(".currentCard").append("div").addClass("card-body");
            currentCard.empty();
            var currentName = currentCard.append("<p>");
            currentCard.append(currentName);

            var time = new Date(response.dt * 1000);
            currentName.append(response.name + " " + time.toLocaleDateString("en-US"));
            currentName.append('<img src="https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png">');
            var currentTemp = currentName.append("<p>");
            currentName.append(currentTemp);
            currentTemp.append("<p>" + "Temperature: " + response.main.temp + " F" + "</p>");
            currentTemp.append("<p>" + "Wind Speed: " + response.wind.speed + " MPH" + "</p>");
            currentTemp.append("<p>" + "Humidity: " + response.main.humidity + "%" + "</p>");


            var urlUV = "https://api.openweathermap.org/data/2.5/uvi?appid=2cf57f3bc628ca68fe4f4198c9697a35&lat=${response.coord.lat}&lon=${response.coord.lon}";

            $.ajax({
                url: urlUV,
                method: "GET"
            }).then(function (response) {

                var currentUV = currentTemp.append("<p>" + "UV Index: " + response.value + "</p>").addClass("card-text");
                currentUV.addClass("UV");
                currentTemp.append(currentUV);
            });
        });

        //Five day forecast 

        $.ajax({
            url: apiForecastUrl,
            method: "GET"
        }).then(function (response) {
            var day = [0, 8, 16, 24, 32];
            var fiveDayEl = $(".fiveDayCard").addClass("card-body");
            var fiveDays = $(".fiveDayOne").addClass("card-text");
            fiveDays.empty();
            day.forEach(function (i) {
                var fiveDayTime = new Date(response.list[i].dt * 1000);
                fiveDayTime = fiveDayTime.toLocaleDateString("en-US");

                fiveDays.append("<div class=fiveDayColor>" + "<p>" + fiveDayTime + "</p>" + `<img src="https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png">` + "<p>" + "Temperature: " + response.list[i].main.temp + " F" + "</p>" + "<p>" + "Wind: " + response.list[i].wind.speed + " MPH" + "</p>" + "<p>" + "Humidty: " + response.list[i].main.humidity + "%" + "</p>" + "</div>");
            })
        });
    }



});