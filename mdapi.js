var https = require('https'),
    querystring = require('querystring'),
    cfg = require('./config');
var config = cfg.config;

//获取访问令牌
exports.oauthRequest = function oauthRequest(code, gotoOkUrl) {
    var url = config.app.apiBaseUrl + config.api.auth2.accessToken + '?';
    var query = {
        app_Key: config.app.appKey,
        app_secret: config.app.appSecret,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: config.app.GetRedirectUrl(),
        format: 'json'
    };
    var querystr = querystring.stringify(query);
    url += querystr;
    https.get(url, function (res) {
        res.on('data', function (chunk) {
            var result = JSON.parse(chunk);
            gotoOkUrl(result.access_token);
        });
    }).on('error', function (e) {
        console.log("获取token error: " + e.message);
    });
};


//获取当前用户的信息
exports.getCurrentUserInfo = function getCurrentUserInfo(token, callback) {
    var url = config.app.apiBaseUrl + config.api.passport.detail + '?';
    var query = {
        access_token: token,
        format: 'json'
    };
    var queryStr = querystring.stringify(query);
    url += queryStr;
    https.get(url, function (res) {
        res.on('data', function (chunk) {
            var result = JSON.parse(chunk);

            callback(result.user);
        });
    }).on('error', function (e) {
        console.log("获取用户信息 error: " + e.message);
    });
};

//获取当前网络的信息
exports.getCurrentProjectInfo = function getCurrentProjectInfo(token, callback) {
    var url = config.app.apiBaseUrl + config.api.company.detail + "?";
    var query = {
        access_token: token,
        format: 'json'
    };
    var queryStr = querystring.stringify(query);
    url += queryStr;

    https.get(url, function (res) {
        res.on('data', function (chunk) {
            var result = JSON.parse(chunk);
            callback(result);
        });
    }).on('error', function (e) {
        console.log("获取当前网络 error:" + e.message);
    });
};



//获取当前用户是否为app admin
exports.getUserIsAdmin = function getUserIsAdmin(token, userID, callback) {
    console.log("UserID" + userID);
    var url = config.app.apiBaseUrl + config.api.app.isAdmin + "?";
    var query = {
        access_token: token,
        u_id: userID,
        format: 'json'
    };
    var queryStr = querystring.stringify(query);
    url += queryStr;
    console.log(url);
    https.get(url, function (res) {
        res.on('data', function (chunk) {
            var result = JSON.parse(chunk);
            callback(result);
        });
    }).on('error', function (e) {
        console.log("获取用户是否admin error: " + e.message);
    });
};
