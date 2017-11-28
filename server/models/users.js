var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usersSchema = new Schema ({
    id: String,
    username: String,
    password: String
});

module.exports = mongoose.model('users', usersSchema, 'users');