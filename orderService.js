app.factory(
  "orderService",
  function ($http, configService, apiService, globalService) {
    var orderMessage = "";
    var cart = {};

    return {
      getOrderMessage: function () {
        return orderMessage;
      },
      setOrderMessage: function (newOrderType) {
        orderMessage = newOrderType;
      },
      getCart: function () {
        return cart;
      },
      setCart: function (newCart) {
        cart = newCart;
      },
    };
  }
);
