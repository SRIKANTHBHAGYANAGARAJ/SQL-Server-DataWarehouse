app.factory('offersService',function($http,apiService,Service){
    return {
        getOffers:function() {
            return $http.get(Service.RequestUrl()+"/property/offers", 
			{
                //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
                headers: apiService.getSignature()
			})	
        },
    }
});