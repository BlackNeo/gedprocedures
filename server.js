const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

const api = require('./server/routes/api');

const portDev = 3000;
const portProd = 8080;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const server = http.createServer(app);

if (app.get('env') === 'development')
{
    server.listen(portDev, function() {
        console.log("Server running on localhost :" + portDev);
    });
} else {
    server.listen(portProd, function () {
        console.log("Server running on localhost :" + portProd);
        });
}