app.factory('Service', function ($http,apiService) {
    var API_KEY = "09fe7fa1d00bb66d60297973b4388afb"; // Extract application secrets to non-committed file

    // Coordinates of Business Bay, Dubai. Generated using OpenWeather Geocoding API
    var LATITUDE = 51.5098624;
    var LONGITUDE = -0.1302131;

    return {
        UserId: function () {
            return { UserId: "LkTnkGfLWJNh/GjlmMvTMFHUWb8vYUr+FhSpOx8L3PU=" };
        },

        RoomDetail: null,
        BuildVersion:'v1.0.39',
        HudiniRefId: null,
        model:'lg',//Please change 'lg' when it is LGTV,and 'samsung' when it is samsung TV
        environment:'production',//please change 'production' while sharing production build, change 'production' while sharing local build
        device:'TV',//please change to 'TV' while test in TV and change 'web' while testing browser
       
     
        RequestUrl: function () {
            var url = window.location.href;
            url = url.split("#/").pop();
            //alert(url);
            //if (url == 'iptv' || url=='iptvchanel' )
            //{
            //    var ip = '0557be5a7def.ngrok.io/TV';

            //}
            //else { web
            var ip = sessionStorage.getItem("ip");
            //}
            if(this.environment=='local')
            {
                return RequestUrl = 'https://' + ip + '/api/v1'; /* http or https */

            }
            else if(this.environment=='production'){
                return RequestUrl = 'http://' + ip + '/api/v1'; /* http or https */
            }
            // return RequestUrl = 'http://14.98.9.51:1010/api/V2/';`
            //return RequestUrl = 'https://philipsapi.azurewebsites.net/api/V2/';
        },
        RequestTime: function () {
            return { RequestTime: Math.round((new Date()).getTime() / 1000) };
        },

        RequestId: function () {
            return {
                RequestId: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                })
            }
        },
        AppId: function () {
             //return { AppId: "c5c9ff0077f54399bfe6" };
            return { AppId: "f2f9c24c-3fea-4df5-a567-3506ef4863481608204724" };
        },
        AppKey: function () {
            //return { AppKey: "A93reRTUJHsCuQSHR+L3GxqOJyDmQpCgps102ciuabc=" };
            return { AppKey: "NzMyYjU5NjMtOGZjOC00NDg4LWI3NTItYWRhYWM1MjhmOTZmIzE2MDgyMDQ3MjQ=" };
        },
        CreateSession: function () {
            return token = "489f609de01e418fa2601fca52df6aa3:2uHph9yQ7f+d4JFbhrMYihN6y2ycYj1Vab6w3Azb80E=:be3f0be4487c434bacd31c90acaf887f:1573112776:x4d5OIPDNEvnlTH9EGAtug=="
        },
        
        DeviceType: function () {
            return { DeviceType: "SAMSUNGTV" };
        },
        devicetype: function () {
            //return { devicetype: "SamsungTV" };
           return { devicetype: "SAMSUNGTV" };
        },
        DeviceName: function () {
            //return { DeviceName: "Hudini.TV.Samsung" };
             return { DeviceName: "com.mankara.hudini.tv.samsung.edwardian" };
        },
        query:function(){
            return{ "query":"{ getWeather(input: {city: \"\", hotelId: \"" + HotelId + "\", lat: \"51.50431\", long: \"-0.0867845\", units: \"metric\"}) { details { temp tempMax tempMin units } error }}"}
                    },

        GetUDID: function () {
            return { UDID: SerialNo };
        },

        UDID: function () {

            return {
                UDID: this.GetUDID(),

            };
            //alert(UDID);
        },

        DEVICEID: function () {
            return { DeviceId: SerialNo };
            //return { DeviceId: "12-23-34-56-57-7812" };
            // return { DeviceId: webapis.tv.info.getDeviceID() };
        },
        ImageSize: function () {
            return "2x";
        },

        // getWeatherInfo: function (token, member) {
        //     var payload = {
        //         Unit: "F",
        //         UDID: SerialNo
        //     }
        //     return $http.post(this.RequestUrl() + "Weather/GetWeatherInfo", payload, {
        //         headers: this.getSignature(payload, token, member)
        //     })
        // },
        getWeatherInfo: function (token, member) {
            return $http.post(this.RequestUrl() + "Weather/GetWeatherInfo", this.GetUDID(), {
                headers: this.getOldSignature(this.GetUDID(), token, member)
            })
        },
        getCurrentAndForecastWeather: function () {
           
            
            return $http.post(
              'https://tnntfeas5veote7c5rjiiy7yty.appsync-api.ap-south-1.amazonaws.com/graphql', this.query(),{
                headers:apiService.gettempSignature()
              }
            );
          },
        getOldSignature:function(RequestData,token,member)
        {
            
            // 
            var AppId=this.AppId().AppId;
            var RequestTime= this.RequestTime().RequestTime;
            var RequestId=this.RequestId().RequestId;
            var concat = AppId + RequestTime + RequestId + angular.toJson(RequestData);
            concat = concat.replace(/"/g, '');
            concat = concat.replace(/'/g, '');
            concat = concat.replace(/(\r\n|\n|\r)/gm, '');
            concat = concat.replace(/\s/g, '')
            var result = window.btoa(unescape(encodeURIComponent(concat)));
            var secret = window.btoa(this.AppKey().AppKey);
            var hash = CryptoJS.HmacSHA256(result, secret);
            var sig64=(hash.toString(CryptoJS.enc.Hex));
            var signature = window.btoa(sig64);
            //console.log(signature);
            //signature = window.btoa(signature);
            return { 'Content-Type': 'application/json',
                'X-Signature': signature,
                'X-Deviceid': this.GetUDID().UDID,
                'X-Macid': this.GetUDID().UDID,
                'X-Appid': AppId, 
                'X-Devicetype': this.devicetype().devicetype, 
                'X-Devicename': this.DeviceName().DeviceName, 
                'X-Requestid': RequestId, 
                'X-Requesttime': RequestTime, 
                
                'Authorization': 'Bearer ' + token };
            //return header;
        },

        getSignature: function (RequestData, token, member)

        {
            
            var AppId = this.AppId().AppId;
            var RequestTime= this.RequestTime().RequestTime;
            var RequestId=this.RequestId().RequestId;
            var concat = AppId + RequestTime + RequestId + angular.toJson(RequestData);
            concat = concat.replace(/"/g, '');
            concat = concat.replace(/'/g, '');
            concat = concat.replace(/(\r\n|\n|\r)/gm, '');
            concat = concat.replace(/\s/g, '')
            var result = window.btoa(unescape(encodeURIComponent(concat)));
            var secret =  window.btoa(unescape(encodeURIComponent(this.HudiniRefId)));
            var hash = CryptoJS.HmacSHA256(result, secret);
            var sig64=(hash.toString(CryptoJS.enc.Hex));
            var signature = window.btoa(sig64);
            //console.log(signature);
            //signature = window.btoa(signature);
            return { 'Content-Type': 'application/json',
                'X-Signature': signature,
                'X-Deviceid': this.GetUDID().UDID,
                'X-Macid': this.GetUDID().UDID,
                'X-Appid': AppId, 
                'X-Devicetype': this.devicetype().devicetype, 
                'X-Devicename': this.DeviceName().DeviceName, 
                'X-Requestid': RequestId, 
                'X-Requesttime': RequestTime, 
                'X-UserId': member, 
                'X-Languagecode' : sessionStorage.getItem("LanguageCode") ? sessionStorage.getItem("LanguageCode") : 'en-IN',
                'X-Hotel' : sessionStorage.getItem("Hbc9a0bf8-4b77-48bf-86d5-1bca9c4a737e"),
                'X-Brand' : sessionStorage.getItem("B25d1e0bb-e7b5-4e19-86a2-f75de536f279"),
                'X-Group' : sessionStorage.getItem("Gca8d78af-4912-4d62-b140-77b2aed77553"),
                'Authorization': 'Bearer ' + token };
            //return header;
        },
        getSignatureGetMethod: function ( token, member) {            
            var AppId = this.AppId().AppId;
            var RequestTime = this.RequestTime().RequestTime;
            var RequestId = this.RequestId().RequestId;
            var concat = AppId + RequestTime + RequestId ;
            concat = concat.replace(/"/g, '');
            concat = concat.replace(/'/g, '');
            concat = concat.replace(/(\r\n|\n|\r)/gm, '');
            concat = concat.replace(/\s/g, '')
            var result = window.btoa(unescape(encodeURIComponent(concat)));
            var secret = window.btoa(unescape(encodeURIComponent(this.HudiniRefId)));
            var hash = CryptoJS.HmacSHA256(result, secret);
            var sig64 = (hash.toString(CryptoJS.enc.Hex));
            var signature = window.btoa(sig64);
            //console.log(signature);
            //signature = window.btoa(signature);
            return {
                'Content-Type': 'application/json',
                'X-Signature': signature,
                'X-Deviceid': this.GetUDID().UDID,
                'X-Macid': this.GetUDID().UDID,
                'X-Appid': AppId,
                'X-Devicetype': this.devicetype().devicetype,
                'X-Devicename': this.DeviceName().DeviceName,
                'X-Requestid': RequestId,
                'X-Requesttime': RequestTime,
                'X-UserId': member,
                'X-Languagecode': sessionStorage.getItem("LanguageCode") ? sessionStorage.getItem("LanguageCode") : 'en-IN',
                'X-Hotel': sessionStorage.getItem("Hbc9a0bf8-4b77-48bf-86d5-1bca9c4a737e"),
                'X-Brand': sessionStorage.getItem("B25d1e0bb-e7b5-4e19-86a2-f75de536f279"),
                'X-Group': sessionStorage.getItem("Gca8d78af-4912-4d62-b140-77b2aed77553"),
                'Authorization': 'Bearer ' + token
            };
            //return header;
        },
        getRoomDeviceInfo: function (token, member) {            // var obj = JSON.stringify(this.UDID());
        
            return $http.post(this.RequestUrl() + "RoomDevice/Info", this.GetUDID(), {
                // headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                headers: this.getOldSignature(this.GetUDID(), token, member)
            })
        },
        getDeviceRegister: function (token, member) {            return $http.post(this.RequestUrl() + "QRDevice/RegisterRoomDevice", this.DEVICEID(), {
                headers: this.getOldSignature(this.DEVICEID(), token, member)
            })
        },
        getDeviceIdRegister: function (token, member, requestData) {
            return $http.post(this.RequestUrl() + "QRDevice/RegisterRoomDevice", requestData, {
                headers: this.getOldSignature(requestData, token, member)
            })
        },
        TVCommand: function (token, member, requestData) {            return $http.post(this.RequestUrl() + "Television/Command", requestData, {
                headers: this.getSignature(requestData, token, member)
            })
        },
        getGuestInfo: function (token, member, requestData) {
            return $http.post(this.RequestUrl() + "CheckInStatus/GuestInfo", requestData, {
                headers: this.getSignature(requestData, token, member)
            })
        },
        UpdatePowerMode: function (token, member, requestData) {
            return $http.post(this.RequestPowerUrl() + "/HotelDeviceReg/PowerUpdate", requestData,
			{
			    headers: this.getSignature(requestData, token, member)
			})
        },
        getHotelInfo: function (token, member, requestData) {
            return $http.post(this.RequestUrl() + "Hotel/GetAll", requestData, {
                headers: this.getSignature(requestData, token, member)
            })
        }
    };
});
