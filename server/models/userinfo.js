var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userinfoSchema = new Schema ({
    id: String,
    username: String,
    password: String,
    mail: String
});

module.exports = mongoose.model('userinfo', userinfoSchema, 'userinfo');