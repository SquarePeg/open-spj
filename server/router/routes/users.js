var jwt = require('jsonwebtoken');
var config = require('../../../config');
var User = require('../../models/user');

var users = {
    
    getAll: function (req, res) {
        
        User.find(function (err, users) {
            if (err) res.send(err);
            //return the users
            res.json(users); // should this be users plural ???
        });
    },
    
    getOne: function (id) {
        
        User.findById(req.params.user_id, function (err, user) {
            if (err) res.send(err);
            // return that user
            res.json(user);
        });
    },
    
    create: function (req, res) {
    
        // create a new instance of the User model
        var user = new User();
        // set the users information (comes from the request)
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.password = req.body.password;
        user.role = req.body.role;
        user.enabled = req.body.enabled;
        user.recoveryEmail = req.body.recoveryEmail;
        user.recoveryPhone = req.body.recoveryPhone;
        // save the user and check for errors
        user.save(function (err) {
            if (err) {
                // duplicate entry
                if (err.code == 11000)
                    return res.json({
                        success: false,
                        message: 'That User already exists.'
                    });
            } else {
                return res.send(err);
            }
                res.json({
                message: 'User created!'
            });
        });        
    },
    
    update: function (req, res) {
        // use our user model to find the user we want
        User.findById(req.params.user_id, function (err, user) {
            if (err) res.send(err);
            // update the users info only if its new
            if (req.body.firstName) user.firstName = req.body.firstName;
            if (req.body.lastName) user.lastName = req.body.lastName;
            if (req.body.email) user.email = req.body.email;
            if (req.body.password) user.password = req.body.password;
            if (req.body.role) user.role = req.body.role;
            if (req.body.enabled) user.enabled = req.body.enabled;
            if (req.body.recoveryEmail) user.recoveryEmail = req.body.recoveryEmail;
            if (req.body.recoveryPhone) user.recoveryPhone = req.body.recoveryPhone;
            
            // save the user
            user.save(function (err) {
                if (err) res.send(err);
                // return a message
                res.json({
                    message: 'User updated!'
                });
            });
        });
    },
    
    delete: function (req, res) {
        User.remove({
            _id: req.params.user_id
            }, function (err, user) {
                if (err) res.send(err);
                res.json({
                    message: 'Successfully deleted'
                });
            });
    }
};

module.exports = users;