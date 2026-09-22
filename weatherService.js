app.factory(
  "weatherService",
  function ($http, configService, apiService, globalService) {
    var API_KEY = "09fe7fa1d00bb66d60297973b4388afb"; // Extract application secrets to non-committed file

    // Coordinates of Business Bay, Dubai. Generated using OpenWeather Geocoding API
    var LATITUDE = 51.5116269;
    var LONGITUDE = 0.14780599999994593;

    return {
      getCurrentAndForecastWeather: function () {
        return $http.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=${LONGITUDE}&exclude=minutely&appid=${API_KEY}&units=metric`
        );
      },
      getHistoricalWeather: function (timestamp) {
        return $http.get(
          `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${LATITUDE}&lon=${LONGITUDE}&dt=${timestamp}&appid=${API_KEY}&units=metric`
        );
      },
    };
  }
);
