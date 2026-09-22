app.factory('circleService', function($http,apiService, Service){
    
    return {
        
        getHotelinfo:function() {
            

            return $http.get(Service.RequestUrl()+"/property/hotel",  
			{
                
                //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
                headers: apiService.getSignature()
			})	
        },
        getAminities:function() {
            return $http.get(Service.RequestUrl()+"/property/amenities", 
			{
                //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
			    headers: apiService.getSignature()
			})	
        },
        getroomtype:function() {
            return $http.get(Service.RequestUrl()+"/property/rooms/type", 
			{
                //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
			    headers: apiService.getSignature()
			})	
        },
        tvmonitor:function(data) {
            return $http.post(Service.RequestUrl()+"/device/tv/updatepowerstatus", data,
			{
                //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
			    headers: apiService.getSignature()
			})	
        },
    }
});