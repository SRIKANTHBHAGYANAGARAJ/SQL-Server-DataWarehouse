app.factory(
  "doorUnlockService",
  function ($http, configService, apiService, globalService) {
    var cameraFeedURL = "";
    return {
      lockDoor: function (roomNo) {
        return $http.post(
          `${configService.apiUrl}/${globalService.vendor}/${roomNo}${globalService.apiUrl.door.updateDoor}/close`,
          null,
          { headers: apiService.getSignature() }
        );
      },
      unlockDoor: function (roomNo) {
        return $http.post(
          `${configService.apiUrl}/${globalService.vendor}/${roomNo}${globalService.apiUrl.door.updateDoor}/open`,
          null,
          { headers: apiService.getSignature() }
        );
      },
      setCameraFeedURL: function (url) {
        cameraFeedURL = url;
      },
      getCameraFeedURL: function () {
        return cameraFeedURL;
      },
    };
  }
);
