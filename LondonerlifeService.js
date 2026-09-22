app.factory('LondonerlifeService', function($http, Service){
    
    return {
        
        getHotelinfo:function(token,member, requestData) {
            

            return $http.post(Service.RequestUrl()+"/Hotel/GetAll", requestData, 
			{
                
                //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
                headers: Service.getSignature(requestData,token, member)
			})	
        },
        getLife: function (token, member, requestData) {
            return $http.post(Service.RequestUrl() + "LondonerLife/GetAll", requestData,
                {
                    //headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    headers: Service.getSignature(requestData, token, member)
                })
        },
        getAminities:function(token,member,requestData) {
            return $http.post(Service.RequestUrl()+"/Amenities/GetAll", requestData, 
			{
                //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
			    headers: Service.getSignature(requestData,token, member)
			})	
        },
    }
});