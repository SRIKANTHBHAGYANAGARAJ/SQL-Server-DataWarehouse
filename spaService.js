app.factory('spaService',function($http,apiService,Service){
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