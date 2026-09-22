app.factory("apiService", function ($http) {
    return {
      getSignature: function () {
        var token = JSON.parse(window.sessionStorage.getItem("token"));
        return {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json; charset=utf-8",
        };
      },
      gettempSignature: function () {
        // var token = JSON.parse(window.sessionStorage.getItem("token"));
         return {
          // Authorization: "Bearer " + token,
           "Content-Type": "application/json; charset=utf-8",
           "x-api-key": "da2-pq3zavthcjgwxlkea6u6btba2m"
         };
       }
    };
  });