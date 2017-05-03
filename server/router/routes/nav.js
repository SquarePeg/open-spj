var config = require('../../../config');
var Nav = require('../../models/nav');

var nav = {

    user: {
        role: ''
    },
    
    setRole: function( role ){
        nav.user.role = role;        
    },
        
    navigation: function( req, res ){
        nav.setRole( req.body.role );
        // select parameters for nav
        Nav.findOne({ role : nav.user.role }).select('logoText links').exec(function(err, nav){
            if (err) throw err;
            //no user with that username was found
            if (!nav) {
                console.log("ugh... no nav object");
            } else if (nav) {
                res.json({
                        success: true,
                        message: 'Here comes the Nav',
                        navigation: nav
                    });
            }
        });
    }
};

module.exports = nav;