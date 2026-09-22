app.factory('feedbackService', function($http, Service) {
    return {
        getFeedback: function(token, requestData) {
            return $http.post(Service.RequestUrl() + "Feedback/Get", requestData, {
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
            })
        },
        setFeedback: function(token, requestData) {
            return $http.post(Service.RequestUrl() + "feedback/GuestFeedback", requestData, {
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
            })
        },
    }
});