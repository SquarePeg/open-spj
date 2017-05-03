var path = require('path');
var config = require('../../../config');

var admin = {

    dashboard: function( req, res ){
        
        console.log(" >> admin.dashboard");
        
        res.redirect( config.adminStart );
        //res.sendFile( express.static(__dirname + config.staticLocation) );
        //res.sendFile( path.join(__dirname, config.adminStart) );
        //res.sendFile( config.adminStart );
    }

};


module.exports = admin;