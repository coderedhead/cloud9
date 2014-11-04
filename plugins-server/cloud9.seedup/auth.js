var assert = require("assert");
var request = require("request");

module.exports = function (options, imports, register) {
    assert(options.appId, "Option 'appId' is required");
    assert(options.authUrl, "Option 'authUrl' is required");

    function auth(user,token) {
        request.post({
            "url": options.authUrl,
            "headers": {
                'authorization': options.appId
            },
            "form": {
              "data": {
                "token":token,
                "email":user
              }       
            }
          }, function(err, r, body) {
            if(err) {
                console.log(err);
                fn("Unauthorized",null);
            } else {
                console.log(body);
                fn(null,true);
            }
        });
    }

    console.log("Using seedup authentication");

    register();
};