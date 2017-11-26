const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');

const port = 8080;

const app = express();

const forceSSL = function() {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(
                    ['https://', req.get('Host'), req.url].join('')
                );
            }
        next();
        };
    };

app.use(forceSSL());    

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// app.listen(port, function() {
//     console.log("Server running on localhost :" + port);
// });

app.listen(process.env.PORT || port, function(){
    console.log("Server running on port : %d in %s mode", this.address().port, app.settings.env);
});