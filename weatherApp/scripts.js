var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempUnit = 'Celsius';
var currentTempInCelsius;

$(document).ready(function(){

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  $("#tempunit").click(function () {
    var currentTempUnit = $("#tempunit").text();
    var newTempUnit = currentTempUnit == "Celsius" ? "Fahrenheit" : "Celsius";
    $("#tempunit").text(newTempUnit);
    if (newTempUnit == "Fahrenheit") {
      var fahTemp = Math.round(parseInt($("#temp").text()) * 9 / 5 + 32);
      $("#temp").text(fahTemp + " " + String.fromCharCode(176));
    } else {
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
    }
  });
  
})

function getWeather(lat, lon) {
  var urlString = api + lat + "&" + lon;
  $.ajax({
    url: urlString, success: function (result) {
      $("#city").text(result.name + ", ");
      $("#country").text(result.sys.country);
      currentTempInCelsius = Math.round(result.main.temp * 10) / 10;
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
      $("#lat").text(result.weather[0].latitude);
      $("#lon").text(result.weather[0].longitude)
      $("#tempunit").text(tempUnit);
      $("#desc").text(result.weather[0].main);
    }
  });
}

/* 
* The function below was designed for the openweather.org api before you had to pay to use it.
* this app no longer uses it in that way.
*/

/*function IconGen(desc) {
  var desc = desc.toLowerCase()
  switch (desc) {
    case 'drizzle':
      addIcon(desc)
      break;
    case 'clouds':
      addIcon(desc)
      break;
    case 'rain':
      addIcon(desc)
      break;
    case 'snow':
      addIcon(desc)
      break;
    case 'clear':
      addIcon(desc)
      break;
    case 'thunderstom':
      addIcon(desc)
      break;
    default:
      $('div.clouds').removeClass('hide');
  }
}

function addIcon(desc) {
  $('div.' + desc).removeClass('hide');
}

*/

/*
* This function changes the background of the image depending on the weather.
*
*/

function changeBackground(desc) {
  var body = document.getElementsByTagName('body')[0];
  if (desc.temp > 20) {
    body.style.backgroundImage = 'url(img/sunny_sky.jpg)';
  } else {
    body.style.background = black;
  }
}

changeBackground(currentTempInCelsius);
