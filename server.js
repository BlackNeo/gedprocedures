const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');

// const port = 8080;
const app = express();

app.set('port', (process.env.PORT || 5000));

// const forceSSL = function() {
//     return function (req, res, next) {
//       if (req.headers['x-forwarded-proto'] !== 'https') {
//         return res.redirect(
//          ['https://', req.get('Host'), req.url].join('')
//         );
//       }
//       next();
//     }
//   }

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

app.use('*', function allowCrossDomain(res, req, next) {
    res.header('Access-Control-Allow-Origin', 'example.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// app.use(forceSSL());

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})
.listen(app.get('port'), function() {
    console.log("Server running on port : %d in %s mode", app.get('port'));
});

// app.listen(port, function() {
//     console.log("Server running on localhost :" + port);
// });

// app.listen(process.env.PORT || 3000, function(){
//     console.log("Server running on port : %d in %s mode", this.address().port, app.settings.env);
//   });