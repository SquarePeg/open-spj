var jwt = require('jsonwebtoken');
var config = require('../../../config');
var User = require('../../models/user');

var auth = {

    user: {
        role: ''
    },

    login: function (req, res) {

        // find the member
        User.findOne({
            email: req.body.email
        }).select('email password role').exec(function (err, user) {
            if (err) throw err;
            //no user with that username was found
            if (!user) {
                res.json({
                    success: false,
                    message: 'Authentication failed. User not found.' // need to change to be generic
                });
            } else if (user) {
                //check if password matches
                var validPassword = user.comparePassword(req.body.password);
                if (!validPassword) {
                    res.json({
                        success: false,
                        message: 'Authentication failed. Wrong Password.' // need to change to be generic
                    });
                } else {
                    //if member is found and password is right

                    console.log("AuthService.login - user found");
                    auth.user = {
                        role: user.role
                    };
                    
                    // PUT CODE HERE TO SETUP NAV
                     
                    // create a token
                    var token = jwt.sign(
                        {
                            user: user
                        }, 
                        config.secret,
                        
                        {
                            expiresInMinutes: 120 // expires in 24 hours
                        }
                    );                    

                    //return the information including token as JSON
                    res.json({
                        success: true,
                        message: 'Enjoy your tasty token!',
                        role: user.role,
                        token: token
                    });
                }
            }
        });

    },

    validate: function (email, password) {

        //console.log( "email.. "+email +" p... "+ password );        

        var dbUserObj = {
            success: false,
            message: 'Authentication failed. System Error - Call the President'
        };

        // find the member
        User.findOne({
            email: email
        }).select('email password').exec(function (err, user) {
            if (err) throw err;

            //no user with that username was found
            if (!user) {
                dbUserObj = {
                    success: false,
                    message: 'Authentication failed. User not found.' // need to change to be generic
                };
            } else if (user) {

                //check if password matches
                var validPassword = user.comparePassword(password);
                if (!validPassword) {
                    dbUserObj = {
                        success: false,
                        message: 'Authentication failed. Wrong Password.' // need to change to be generic
                    };
                } else {

                    //if member is found and password is right
                    // create a token
                    /*
                    var token = jwt.sign(
                        { email: user.email },
                        config.secret,
                        { expiresInMinutes: 120 }
                    );
                    */

                    //return the information including token as JSON
                    dbUserObj = {
                        email: email,
                        success: true,
                        message: 'Enjoy your tasty token!',
                    };
                }
            }
            console.log("At the end");
        });

        return dbUserObj;
    },
    validateUser: function (email) {

        var dbUserObj = {
            success: false,
            message: 'Authentication failed. System Error - Key is broken'
        };

        // find the member
        User.findOne({
            email: email
        }).select('email').exec(function (err, user) {
            if (err) throw err;

            //no user with that username was found
            if (!user) {
                dbUserObj = {
                    success: false,
                    message: 'Authentication failed. User not found.' // need to change to be generic
                };
            } else if (user) {


                //return the information including token as JSON
                dbUserObj = {
                    success: true,
                    message: 'User is valid'
                };
            }
        });

        return dbUserObj;
    }
};

// private method
function genToken(userObj) {
    var token = jwt.sign({
            user: userObj
        },
        config.secret, {
            expiresInMinutes: 120
        }
    );

    return {
        token: token,
        user: userObj
    };
    //expires: { expiresInMinutes: 120 },
}

module.exports = auth;
