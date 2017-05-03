var UserModel = require('../models/user');

module.exports = function (app, express) {
    
    var apiRouter = express.Router();
    
    var auth = require('./routes/auth.js');
    apiRouter.post('/login', auth.login);
    
    // USERS
    var users = require('./routes/users.js');
    apiRouter.get('/api/users', users.getAll);
    apiRouter.get('/api/user/:id', users.getOne);
    apiRouter.post('/api/user/', users.create);
    apiRouter.put('/api/user/:id', users.update);
    apiRouter.delete('/api/user/:id', users.delete);
  
    app.use('/', apiRouter);
};