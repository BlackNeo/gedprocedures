const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');

const portDev = 3000;
const portProd = 3000;


const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

if (app.get('env') === 'development')
{
    app.listen(portDev, function() {
        console.log("Server running on localhost :" + portDev);
    });
} else {
    app.listen(portProd, function () {
        console.log("Server running on localhost :" + portProd);
        });
}