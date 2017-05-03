module.exports = {
    'port' : process.env.PORT || 1337,
    'authTimeout' : 120, // in minutes, 120 = 2 hours
    //'database': 'mongodb://localhost:27017/db_spj',
    'database': 'mongodb://peggy:Blox123!@ds051933.mongolab.com:51933/spj',
    'secret' : 'porkandbeansporkandbeans',
    'webStart' : '/public/web/views/index.html',
    'adminStart' : '/views/admin',
    'companyStart' : '/company/dashboard',
    'memberStart' : '/member/dashboard',
    'staticLocation': '/public/web/'
};