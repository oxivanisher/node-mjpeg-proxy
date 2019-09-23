var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();

app.get('/index1.jpg', new MjpegProxy('http://admin:admin@192.168.1.109/cgi/mjpg/mjpg.cgi').proxyRequest);
app.listen(8080);
