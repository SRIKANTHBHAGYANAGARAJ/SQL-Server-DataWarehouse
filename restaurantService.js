app.factory('restaurantService',function($http,apiService,Service){
    return {
        getRestaurant:function() {
            return $http.get(Service.RequestUrl()+ "/property/restaurants", 
			{
                headers: apiService.getSignature()  
			})	
        },
        getMenu:function(id) {
           
            return $http.get(Service.RequestUrl()+ "/property/restaurantmenus/"+id, 
			{
                headers: apiService.getSignature()  
			})	
        },
        BookRestaurant:function(token,member,requestData) {
            return $http.post(Service.RequestUrl()+"Restaurant/Booking", 
			{
                headers: Service.getSignature(requestData, token, member)
			})	
        },
    }
});