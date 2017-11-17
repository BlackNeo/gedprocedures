const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Users = require('../models/Users');

const db = "mongodb://zerosumjoke:(*yp51l0n3!*)@ds261745.mlab.com:61745/ngadminprocess";
mongoose.Promise = global.Promise;

var promise = mongoose.connect(db, {
    useMongoClient: true
});
promise.then(function(db, err) {
    if(err) {
        console.log('Connection to database error' + err);
    }
});

router.get('/api', function(req, res) {
    res.send('api works');
    console.log("Api works");
});

/* User API*/

/* Get request for all users */
router.get('/users', function(req, res) {
    console.log('Get Access to all users in DB');
    Users.find({})
    .exec(function(err, users) {
        if(err) {
            console.log("Error retriewing the users");
        } else {
            res.json(users);
        }
    });
});


/* Get request for a single user */
router.get('/users/:id', function(req, res) {
    console.log("Get request for a single User in DB");
    Users.findById(req.params.id)
    .exec(function(err, users) {
        if(err) {
            console.log("Error retriewing the video");
        } else {
            res.json(users);
        }
    });
});

/* Post request to add user */ 
router.post('/user', function(req, res) {
    console.log('Post a new user in HTTP');
    var newUser = new Users();
    newUser.name = req.body.name;
    newUser.password = req.body.password;
    newUser.save(function(err, insertedUser) {
        if(err) {
            console.log('Error saving the new user');
        } else {
            res.json(insertedUser);
        }
    });
});

/* Put request to update user */
router.put('/user/:id', function(req, res) {
    console.log('Uptdate an user in DB');
    Users.findByIdAndUpdate(req.params.id,
    {
        $set:  {name: req.body.name, password: req.body.password}
    },
    {
        new: true
    },
    function(err, updatedUser) {
        if(err) {
            res.send("Error updating user in DB");
        } else {
            res.json(updatedUser);
        }
    });
});


/* Delete request for a single user */
router.delete('/user/:id', function(req, res) {
    console.log('Deleting an user in DB');
    Users.findByIdAndRemove(req.params.id, function(err, deletedUser) {
        if(err) {
            res.send("Error deleting user");
        } else {
            res.json(deletedUser);
        }
    });
});

module.exports = router;