app.factory('homeService', function ($http,apiService, Service) {
    return {
        getLandingTiles: function (roomno) {
            return $http.get(Service.RequestUrl()+ "/room/" +roomno + "/landingInfo",
			{
			    headers: apiService.getSignature()
			})
        },
        getqrcode: function (token, requestData) {
            return $http.post(Service.RequestUrl() + "QRCode/CheckinQRData", requestData,
			{
			    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
			})
        },
    }
});