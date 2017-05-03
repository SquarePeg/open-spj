var express = require('express');
var apiRouter = express.Router();

// Routes that can be accessed by anyone

// AUTHENTICATION
var auth = require('./routes/auth.js');
apiRouter.post('/login', auth.login);

// Routes that can be access only by Authenticated Users

// JOBS
//var jobs = require('./routes/jobs.js');
//apiRouter.get('/api/jobs', jobs.getAll);
//apiRouter.get('/api/job/:id', jobs.getOne);
//apiRouter.post('/api/job/', jobs.create);
//apiRouter.put('/api/job/:id', jobs.update);
//apiRouter.delete('/api/job/:id', jobs.delete);

// NAV
//var nav = require('./routes/nav.js');
//apiRouter.get('/api/nav', nav.getAll);
//apiRouter.get('/api/nav/:id', nav.getOne);

// Routes that can be access only by Authenticated & Authorized Users

// USERS
var users = require('./routes/users.js');
apiRouter.get('/api/users', users.getAll);
apiRouter.get('/api/user/:id', users.getOne);
apiRouter.post('/api/user/', users.create);
apiRouter.put('/api/user/:id', users.update);
apiRouter.delete('/api/user/:id', users.delete);

module.exports = apiRouter;