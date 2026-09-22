app.factory('serviceRequestService', function ($http,apiService, Service) {
    return {
        getServiceRequest: function () {
            return $http.get(Service.RequestUrl() + "/property/housekeeping",
                // return $http.post(Service.RequestUrl()+"RoomServices/GetServiceRequests",requestData, 
                {
                    //headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    headers: apiService.getSignature()
                })
        },
        myorder:function(data) {
            return $http.post(Service.RequestUrl()+"/order/serviceRequest/list",data, 
			{
                //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
                headers: apiService.getSignature()
			})	
        },
        setServiceRequest: function (requestData) {
          
            return $http.post(Service.RequestUrl() + "/email/houseKeeping", requestData,
                {
                    //headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    // headers: Service.getSignature(requestData, token, member)
                    headers: apiService.getSignature()
                })
        },
    }
});