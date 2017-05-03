var config = require('../../../config');
var User = require('../../models/user');
var Job = require('../../models/job');

module.exports = function(app, express) {

    var jobRouter = express.Router();
    app.use('/jobs', jobRouter);   
    
    jobRouter.get('/job/get', function (req, res) {
        
        Job.find(function(err, jobs){
            if( err ){
                res.send(err);
            } else {            
                res.json(jobs);
            }
        });
    });
};