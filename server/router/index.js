var jwt = require('jsonwebtoken');
var config = require('../../config');
var Nav = require('../models/nav');
//var User = require('../models/user');


module.exports = function (app, express) {
    
    //var apiRouter = require('./routes/api');
    
    var apiRouter = express.Router();
    var auth = require('./routes/auth.js');
    var nav = require('./routes/nav.js');
    apiRouter.post('/auth', auth.login);
    apiRouter.post('/nav', nav.navigation);
    app.use('/api', apiRouter);
    
    //var users = require('./routes/users.js');
    //apiRouter.get('/api/users', users.getAll);
    //apiRouter.get('/api/user/:id', users.getOne);
    //apiRouter.post('/api/user/', users.create);
    //apiRouter.put('/api/user/:id', users.update);
    //apiRouter.delete('/api/user/:id', users.delete);

    
    var adminRouter = express.Router();
    var admin = require('./routes/admin.js');
    adminRouter.get('/dashboard', admin.dashboard);
    app.use('/super', adminRouter);
};