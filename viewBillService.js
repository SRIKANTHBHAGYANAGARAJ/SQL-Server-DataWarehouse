app.factory(
  "viewBillService",
  function ($http, configService, apiService, globalService) {
    return {
      getBill: function (roomNo) {
        return $http.get(
          `${configService.apiUrl}${globalService.apiUrl.viewBill.getBill}/${roomNo}`,
          { headers: apiService.getSignature() }
        );
      },
    };
  }
);
