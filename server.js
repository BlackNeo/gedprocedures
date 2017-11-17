var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var api = require('./server/routes/api');

var portDev = 3000;
var portProd = 3000;


var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

if (app.get('env') === 'development')
{

    app.listen(port, function() {
        console.log("Server running on localhost :" + portDev);
    });
} else {
    app.listen(8080, function () {
        console.log("Server running on localhost :" + portProd);
        });
}