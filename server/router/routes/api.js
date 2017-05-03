var jwt = require('jsonwebtoken');
var config = require('../../../config');
var User = require('../../models/user');

module.exports = function(app, express) {

    var apiRouter = express.Router();
    app.use('/api', apiRouter);

    // route to authenticate a user (POST http://localhost:1337/api/auth)
    apiRouter.post('/auth', function(req,res){
        
        // find the member
        User.findOne({ email: req.body.email }).select('email password').exec(function(err, user){
            if(err) throw err;
            
            //no user with that username was found
            if(!user){
                res.json({
                    success: false,
                    message: 'Authentication failed. User not found.' // need to change to be generic
                });
            }else if(user){
                //check if password matches
                var validPassword = user.comparePassword( req.body.password );
                if(!validPassword){
                    res.json({
                        success: false,
                        message: 'Authentication failed. Wrong Password.' // need to change to be generic
                    });
                }else{
                    
                    //if member is found and password is right
                    // create a token
                    var token = jwt.sign({
                        email: user.email
                    }, config.secret, {
                        expiresInMinutes: 120 // expires in 24 hours
                    });
                    
                    //return the information including token as JSON
                    res.json({
                        success: true,
                        message: 'Enjoy your tasty token!',
                        token: token
                    });
                }
            }
        });
    });
    
    //route middleware to verify a token
    apiRouter.use(function(req, res, next){
        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        
        // decode token
        if(token){
            // verifies secret and checks for expiration of token
            jwt.verify(token, config.secret, function(err, decoded){
                if(err){
                    return res.json({
                        success: false,
                        message: 'Failed to authenticate token.'
                    });
                } else {
                    // if all is good, save the request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            // if there is no token
            // return an HTTP response of 403 (access forbidden) and an error message
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        }
        
    
    });
    
    apiRouter.get('/me', function(req, res){
        res.send(req.decoded);
    });
    
    
    apiRouter.get('/role').get(function (req, res) {
        User.findOne({
                email: req.body.email
        }).select('role').exec(function(err, user){
            if(err) throw err;
            
            //no user with that username was found
            if(!user){
                res.json({
                    success: false,
                    message: 'Authentication failed. Role not found.' // need to change to be generic
                });
            }else if(user){
                
                res.json({
                        success: true,
                        message: 'Your Role is...',
                        role: user.role
                    });
            }
        });
    });
    

    // test route to make sure everything is working
    // accessed at GET http://localhost:8080/api
    apiRouter.get('/', function (req, res) {
        res.json({
            message: 'hooray! welcome to our api!'
        });
    });

    
    
    // on routes that end in /users
    // ----------------------------------------------------
    apiRouter.route('/users')
        // create a user (accessed at POST http://localhost:8080/api/users)
        .post(function (req, res) {
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
        })
        .get(function (req, res) {
            User.find(function (err, users) {
                if (err) res.send(err);
                //return the users
                res.json(users); // should this be users plural ???
            });

        });


    apiRouter.route('/users/:user_id')
        .get(function (req, res) {
            User.findById(req.params.user_id, function (err, user) {
                if (err) res.send(err);
                // return that user
                res.json(user);
            });
        })
        .put(function (req, res) {
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
        })
        .delete(function (req, res) {
            User.remove({
                _id: req.params.user_id
            }, function (err, user) {
                if (err) res.send(err);
                res.json({
                    message: 'Successfully deleted'
                });
            });
        });
};