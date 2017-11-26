const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema ({
    id: String,
    username: String,
    password: String
});

module.exports = mongoose.model('users', usersSchema, 'users');