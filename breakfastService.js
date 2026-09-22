app.factory('breakfastService',function($http,apiService,Service){
    return {
        getAllRoomDiningMenu:function() {
            return $http.get(Service.RequestUrl()+"/property/ird", 
			{
                //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
                headers: apiService.getSignature()
			})	
        },
        myorder:function(data) {
            return $http.post(Service.RequestUrl()+"/order/ird/list",data, 
			{
                //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
                headers: apiService.getSignature()
			})	
        },
        CreateKot: function (requestData) {
             return $http.post(Service.RequestUrl()+"/email/ird",requestData, 
			{
                //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
                headers: apiService.getSignature()
			})	
        },
    }
});