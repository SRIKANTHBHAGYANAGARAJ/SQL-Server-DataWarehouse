app.factory(
  "irdService",
  function ($http, configService, apiService, globalService) {
    var cart = [];
    var specialInstructions = "";

    return {
      getAll: function () {
        return $http.get(
          configService.apiUrl + globalService.apiUrl.ird.getAll,
          { headers: apiService.getSignature() }
        );
      },
      addToCart: function (item, itemName, itemPrice, itemQuantity, addOn) {
        cart.push({
          id: cart.length + 1,
          item: item,
          itemName: itemName,
          itemPrice: itemPrice,
          itemQuantity: itemQuantity,
          addOn: addOn,
        });
      },
      setCart: function (newCart) {
        cart = newCart;
      },
      getCart: function () {
        return cart;
      },
      setSpecialInstructions: function (instructions) {
        specialInstructions = instructions;
      },
      getSpecialInstructions: function () {
        return specialInstructions;
      },
      sendIRDEmailRequest: function (data) {
        return $http.post(
          configService.apiUrl + globalService.apiUrl.ird.emailIRDRequest,
          data,
          { headers: apiService.getSignature() }
        );
      },
    };
  }
);
