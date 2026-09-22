// app.factory('wellnessService', function ($http, Service) {
//     return {
//         getSpa: function (token, member) {
//             return $http.get(Service.RequestSPAUrl(),
//             //return $http.get( "http://192.168.0.153:1018/api/v1/spa/spa",
// 			{
// 			    //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
// 			    headers: Service.getSignatureGetMethod(token, member)
// 			})
//         },
//         getLife: function (token, member, requestData) {
//             return $http.post(Service.RequestUrl() + "LondonerLife/GetAll", requestData,
//                 {
//                     //headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
//                     headers: Service.getSignature(requestData, token, member)
//                 })
//         },
//         getTreatementType: function (token, member, id) {
//             return $http.get(Service.RequestSPAUrl() + id + "/treatmenttype",
//            // return $http.get("http://192.168.0.153:1018/api/v1/spa/" + id + "/treatmenttypes",
// 			{
// 			    //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
// 			    headers: Service.getSignatureGetMethod(token, member)
// 			})
//         },
//         getTreatement: function (token, member, id, spaid) {
//             return $http.get(Service.RequestSPAUrl() + spaid + "/treatmenttype/" + id + "/treatment",
//             //return $http.get("http://192.168.0.153:1018/api/v1/spa/" + spaid + "/treatmenttypes/" + id + "/treatments",
// 			{
// 			    //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
// 			    headers: Service.getSignatureGetMethod(token, member)
// 			})
//         },
//         checkavail: function (token, member, id, requestData, spaid) {            return $http.post(Service.RequestSPAUrl() + spaid + "/treatment/" + id + "/checkavailability", requestData,
//             //return $http.get("http://192.168.0.153:1018/api/v1/spa/" + spaid + "/treatmenttypes/" + id + "/treatments",
// 			{
// 			    //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
// 			    headers: Service.getSignature(requestData, token, member)
// 			})
//         },
//         book: function (token, member, id, requestData, spaid) {            return $http.post(Service.RequestSPAUrl() + spaid + "/treatment/" + id + "/booktreatment", requestData,
//             //return $http.get("http://192.168.0.153:1018/api/v1/spa/" + spaid + "/treatmenttypes/" + id + "/treatments",
// 			{
// 			    //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
// 			    headers: Service.getSignature(requestData, token, member)
// 			})
//         },
//         bookSpa: function (token, member, requestData) {
//             return $http.post(Service.RequestUrl() + "SPA/Booking", requestData,
// 			{
// 			    //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
// 			    headers: Service.getSignature(requestData, token, member)
// 			})
//         },
//         getSpaImage: function (id,token,member) {
//             return $http.get(Service.RequestSPAImageUrl() + "image/" + id + "/1200/1200", {responseType: 'arraybuffer'},
//             //return $http.get("http://192.168.0.153:1018/api/v1/spa/" + spaid + "/treatmenttypes/" + id + "/treatments",
// 			{
// 			    //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
// 			    headers: Service.getSignatureGetMethod(token, member)
// 			})
//         }
//     }
// });
app.factory('wellnessService',function($http,apiService,Service){
    return {
        getSpa:function() {
            return $http.get(Service.RequestUrl()+ "/property/spa", 
			{
                headers: apiService.getSignature()  
			})	
        },    
        checkavail:function(data) {
            return $http.post(Service.RequestUrl() + "/spa/appointment/search", data,
			{
                headers: apiService.getSignature()  
			})	
        },
        book:function(data)  {
            return $http.post(Service.RequestUrl() + "/spa/appointment", data,
			{
                headers: apiService.getSignature()  
			})	
        },       
    }
});