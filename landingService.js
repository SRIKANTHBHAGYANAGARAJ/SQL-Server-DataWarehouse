app.factory("landingService", function ($http, Service,GlobalService) {
    return {
      getRoomNo: function (udid) {
        return $http.get(Service.RequestUrl()  + '/getRoomNoFromUDID/' + udid, {});
      },
      registerDevice: function (payload) {
        return $http.post(Service.RequestUrl() + '/registerDevice', payload, {});
      },
      getAllHotel: function () {
        return $http.get(Service.RequestUrl() + '/property/hotel', {});
      },
      getAllBouquet: function () {
        return $http.get(Service.RequestUrl() + '/property/bouquet', {});
      },
      getRoomDetails: function (roomNo) {
        return $http.get(
            Service.RequestUrl() + '/room/' + roomNo
        );
      },
      getToken: function () {
       var guestDetail = JSON.parse(window.sessionStorage.getItem("guestDetail"));
        if (guestDetail){
          var payload = {
           udid:SerialNo,
            roomNo: guestDetail.room_no,
            deviceType: "IPTV",
          };  
          return $http.post(Service.RequestUrl() + '/login', payload, {});
        }
      },
      getNotifications: function () {
       
        return $http.get(
          Service.RequestUrl() + '/tv/campaign/notification/history/room/' + GlobalService.roomNo + '/device/' + GlobalService.UDID
         );
      },
     
    
      clearNotifications: function (payload) {
        
        return $http.post(
          Service.RequestUrl() + '/campaign/notification/history/room/' + GlobalService.roomNo + '/clear',payload
          // { headers: apiService.getSignature() }
        );
      },
      ReadNotifications: function (payload) {
        
        return $http.post(
          Service.RequestUrl() + '/campaign/notification/history/room/' + GlobalService.roomNo + '/status', payload
          );
      },
      DeleteNotifications: function (payload) {
        return $http.delete(
          Service.RequestUrl() + '/tv/campaign/notification/history/room/' + GlobalService.roomNo + '/device/' + GlobalService.UDID,payload
          );
      },
    
    };
  });