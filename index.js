var express = require('express'),
    http = require('http'),
    https = require('https'),
    querystring = require('querystring'),
     api = require('./mdapi'),
    cfg = require('./config');
var config = cfg.config;
var app = express();

app.configure(function() {
        app.set("port", config.server.port);
        app.use(express.cookieParser());
        app.use(express.cookieSession({
             secret: "md"
        }));
});

app.get('/default', function(req,res,next) {
    if (!req.session||!req.session.token) {
        res.redirect(config.app.getRequestUrl());
    } else {
        console.log("token为:" + req.session.token);
        res.send("token为" + req.session.token);
    }
});


//回调地址
app.get('/authorize_callback', function (req, res, next) {
    var code = req.query.code;
    console.log("Code:" + code);
    if (code) {
        api.oauthRequest(code, function(token) {
            console.log("token为:" + token);
            req.session.token = token;
            res.send("token为" + token);
        });
    } else {
        next();
    }
});

//当前登录用户信息
app.get('/current_user', function(req, res) {
    if (req.session&&req.session.token) {
        api.getCurrentUserInfo(req.session.token, function(user) {
            res.send(JSON.stringify(user));
        });
    }
});

//当前登录用户所在网络信息
app.get('/current_project', function(req, res) {
    if (req.session&&req.session.token) {
        api.getCurrentProjectInfo(req.session.token, function(project) {
            res.send(JSON.stringify(project));
        });
    }
});

http.createServer(app).listen(app.get('port'), function() {
    console.log("Server is running at port: " + app.get('port'));
});
