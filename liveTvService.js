app.factory('liveTvService',function($http,apiService,Service){
    return {
        getChannels:function() {
            return $http.get(Service.RequestUrl()+"/property/liveTv/category", 
			{
                //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
                headers: apiService.getSignature()
			})	
        },
        getepgChannel: function (token, member) {
            return $http.get(Service.RequestUrl() + "tvchannelservice/get?inclProgramme=false",
			{
			    //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
			    headers: Service.getSignatureGetMethod(token, member)
			})
        },
        getepgChanneldetail: function (token, member,id) {
            return $http.get(Service.RequestUrl() + "tvchannelservice/get/"+id+"?inclProgramme=true",
			{
			    //headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token}
			    headers: Service.getSignatureGetMethod(token, member)
			})
        },
     
    }
});







































