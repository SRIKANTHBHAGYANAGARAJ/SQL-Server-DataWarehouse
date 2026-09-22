app.factory(
  "alarmService",
  function ($http, configService, apiService, globalService) {
    return {
      getAllAlarms: function (roomId) {
        return $http.get(
          `${configService.apiUrl}${globalService.apiUrl.alarm.getAll}/${roomId}`,
          {
            headers: apiService.getSignature(),
          }
        );
      },
      createAlarm: function (payload) {
        return $http.post(
          `${configService.apiUrl}${globalService.apiUrl.alarm.alarm}`,
          payload,
          {
            headers: apiService.getSignature(),
          }
        );
      },
      getAlarm: function (alarmId) {
        return $http.get(
          `${configService.apiUrl}${globalService.apiUrl.alarm.alarm}/${alarmId}`,
          {
            headers: apiService.getSignature(),
          }
        );
      },
      updateAlarm: function (payload) {
        return $http.put(
          `${configService.apiUrl}${globalService.apiUrl.alarm.alarm}`,
          payload,
          {
            headers: apiService.getSignature(),
          }
        );
      },
      deleteAlarm: function (alarmId) {
        return $http.delete(
          `${configService.apiUrl}${globalService.apiUrl.alarm.alarm}/${alarmId}`,
          {
            headers: apiService.getSignature(),
          }
        );
      },
      stopAlarm: function (roomNo) {
        return $http.post(
          `${configService.apiUrl}${globalService.apiUrl.alarm.stopAlarm}/${roomNo}`,
          null,
          {
            headers: apiService.getSignature(),
          }
        );
      },
    };
  }
);
