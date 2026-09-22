app.factory('ambienceService', function ($http, Service) {
    return {

        DeviceConfig: function (token, member, requestData) {
            return $http.post(Service.RequestUrl() + "DeviceConfig", requestData,
                {
                    //headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    headers: Service.getSignature(requestData, token, member)
                })
        },
        DeviceStatus: function (token, member, requestData) {
            return $http.post(Service.RequestUrl() + "RoomDeviceMapping/DeviceStatus", requestData,
                {
                    //headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    headers: Service.getSignature(requestData, token, member)
                })
        },
        UpdateTheme: function (token, member, requestData) {
            return $http.post(Service.RequestUrl() + "DeviceOperation/UpdateTheme", requestData,
                {
                    //headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    headers: Service.getSignature(requestData, token, member)
                })
        },
        UpdateRelayPower: function (token, member, requestData) {
            return $http.post(Service.RequestUrl() + "DeviceOperation/UpdateRelayPower", requestData,
                {
                    //headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    headers: Service.getSignature(requestData, token, member)
                })
        },
        UpdateThermostatePower: function (token, member, requestData) {
            return $http.post(Service.RequestUrl() + "DeviceOperation/UpdateThermostatePower", requestData,
                {
                    //headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    headers: Service.getSignature(requestData, token, member)
                })
        },
        UpdateTempMode: function (token, member, requestData) {
            return $http.post(Service.RequestUrl() + "DeviceOperation/UpdateTempMode", requestData,
                {
                    //headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    headers: Service.getSignature(requestData, token, member)
                })
        },
        UpdateCurrentTemp: function (token, member, requestData) {
            return $http.post(Service.RequestUrl() + "DeviceOperation/UpdateCurrentTemp", requestData,
                {
                    //headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    headers: Service.getSignature(requestData, token, member)
                })
        },
        UpdateFanSpeed: function (token, member, requestData) {
            return $http.post(Service.RequestUrl() + "DeviceOperation/UpdateFanSpeed", requestData,
                {
                    //headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    headers: Service.getSignature(requestData, token, member)
                })
        },
        UpdateFanMode: function (token, member, requestData) {
            return $http.post(Service.RequestUrl() + "DeviceOperation/UpdateFanSpeed", requestData,
                {
                    //headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    headers: Service.getSignature(requestData, token, member)
                })
        },
        UpdateCurtain: function (token, member, requestData) {
            return $http.post(Service.RequestUrl() + "DeviceOperation/UpdateCurtain", requestData,
                {
                    //headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    headers: Service.getSignature(requestData, token, member)
                })
        },
        UpdateDimmer: function (token, member, requestData) {
            return $http.post(Service.RequestUrl() + "DeviceOperation/UpdateDimmer", requestData,
                {
                    //headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    headers: Service.getSignature(requestData, token, member)
                })
        },
    }
});