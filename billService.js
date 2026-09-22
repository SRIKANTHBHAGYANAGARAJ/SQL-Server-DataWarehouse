// app.factory('billService',function($http,apiService,Service){
//     var member = sessionStorage.getItem("member");
//     return {
//         getGuestFolio:function() {
//             return $http.post(Service.RequestUrl()+"invoice/{roomNo}", 
// 			{
//                 headers: apiService.getSignature()
// 			})	
//         },
//         SendFolioInfo: function (token, requestData) {
//             debugger;
//             return $http.post(Service.RequestUrl()+"Reservation/SendFolioInfo",requestData, 
// 			{
//                 headers: Service.getSignature(requestData, token, member)
// 			})	
//         },
//     }
// });
app.factory(
  "billService",
  function ($http,apiService,Service) {
    return {
      getBill: function (roomNo) {
        return $http.get(Service.RequestUrl()+"/invoice/"+roomNo,
          { headers: apiService.getSignature() }
        );
      },
    };
  }
);
  