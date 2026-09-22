app.factory(
  "housekeepingService",
  function ($http, configService, apiService, globalService) {
    var selectedTileIndex = 0;
    return {
      getLandingTile: function (token, requestData) {},
      getHouseKeepingInfo: function () {
        return $http.get(
          configService.apiUrl +
            globalService.apiUrl.housekeeping.getHousekeepingInfo,
            {headers: apiService.getSignature()}
        );
      },
      sendEmailHousekeepingRequest: function (data) {
        return $http.post(
          configService.apiUrl +
            globalService.apiUrl.housekeeping.emailHousekeepingRequest,
          data, {headers: apiService.getSignature()}
        );
      },
      setSelectedTileIndex: function (index) {
        selectedTileIndex = index;
      },
      getSelectedTileIndex: function () {
        return selectedTileIndex;
      },
    };
  }
);
