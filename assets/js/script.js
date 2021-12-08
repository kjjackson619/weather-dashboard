var searchBtnEl = document.querySelector("#btn");
var cityNameEl = document.querySelector("#city-name");



var getWeather = function () {

    //api for Chicago
    var chicago = "https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=2cf57f3bc628ca68fe4f4198c9697a35";

    fetch(chicago).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });

    //api for Seattle
    var seattle = "https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=2cf57f3bc628ca68fe4f4198c9697a35";

    fetch(seattle).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });

    //api for Austin
    var austin = "https://api.openweathermap.org/data/2.5/weather?q=austin&appid=2cf57f3bc628ca68fe4f4198c9697a35";

    fetch(austin).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });

    //api for Denver 
    var denver = "https://api.openweathermap.org/data/2.5/weather?q=denver&appid=2cf57f3bc628ca68fe4f4198c9697a35";

    fetch(denver).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });

    //api for Miami
    var miami = "https://api.openweathermap.org/data/2.5/weather?q=miami&appid=2cf57f3bc628ca68fe4f4198c9697a35";

    fetch(miami).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });

    //api for Orlando
    var orlando = "https://api.openweathermap.org/data/2.5/weather?q=orlando&appid=2cf57f3bc628ca68fe4f4198c9697a35";

    fetch(orlando).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });

    //api for Columbus
    var columbus = "https://api.openweathermap.org/data/2.5/weather?q=columbus&appid=2cf57f3bc628ca68fe4f4198c9697a35";

    fetch(columbus).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });

    //api for Atlanta
    var atlanta = "https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=2cf57f3bc628ca68fe4f4198c9697a35";

    fetch(atlanta).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });

    //api for LA
    var losAngeles = "https://api.openweathermap.org/data/2.5/weather?q=lax&appid=2cf57f3bc628ca68fe4f4198c9697a35";

    fetch(losAngeles).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });
};

var formSubmitHandler = function (event) {
    event.preventDefault();

    var city = cityNameEl.value.trim();

    if (city) {
        getWeather(city);
        cityNameEl.value = "";
        console.log(city);
    } else {
        alert("Please enter valid city!");
    }
};

searchBtnEl.addEventListener("click", formSubmitHandler);

getWeather();


