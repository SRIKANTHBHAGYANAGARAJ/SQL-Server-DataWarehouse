app.factory('cityGuideService', function ($http,apiService, Service) {
    return {
        getCityGuide: function () {
            return $http.get(Service.RequestUrl() + "/property/cityguide",
                {
                    //headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    //headers: Service.getSignature(requestData, token,member)
                    headers: apiService.getSignature()
                })
        },
    }
});