app.factory(
  "contentService",
  function ($http, configService, apiService, globalService) {
    var content = {};

    return {
      setContent: function (newContent) {
        content = newContent;
      },
      getContent: function () {
        return content;
      },
    };
  }
);
