(function() {
    'use strict'
    // API doc of expressjs app.use(): http://expressjs.com/api.html#app.use

    // write express args into an url config object
    var urlConfig = {
        protocol: process.argv[2],
        host: process.argv[3],
        port: process.argv[4],
        urlPath: process.argv[5]
    }

    // setup express
    var express = require('express'),
        compression = require('compression'),
        serveIndex = require('serve-index'),
        app = express(),
        urlPath = urlConfig.urlPath,
        port = urlConfig.port;

    // set default mime type
    express.static.mime.default_type = 'text/xml';

    // enable compression
    app.use(compression());

    // serve static content
    app.use(urlPath, express.static(__dirname + '/build'));

    // enable directory listening
    app.use(urlPath, serveIndex(__dirname + '/build', {
        icons: true,
        view: 'details'
    }));

    // set port to listen
    app.listen(port);
})();
