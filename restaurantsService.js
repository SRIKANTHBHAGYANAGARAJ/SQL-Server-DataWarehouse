app.factory("restaurantsService", function ($http, configService, apiService, globalService) {
  return {
    getRestaurants: function () {
      return $http.get(configService.apiUrl + globalService.apiUrl.restaurant.getAll, {headers: apiService.getSignature()});
    },
    sendEmailRestaurantBooking: function (data) {
      return $http.post(configService.apiUrl + globalService.apiUrl.restaurant.emailRestaurantBooking, data, {headers: apiService.getSignature()});
    }
  };
});
