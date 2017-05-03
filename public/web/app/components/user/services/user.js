angular.module('userModule', [])

.factory('UserService', ['$http', function($http){
    
    // create a new object
    var userFactory = {};
    
    // get a single user
    userFactory.get = function(id){
        return $http.get('/api/users/' + id);
    };
    
    // get all users
    userFactory.all = function(){
        return $http.get('/api/users/');
    };
    
    // get users role
    userFactory.role = function(id){
        return $http.get('/api/users/' + id).role;
    };
    
    // create a single user
    userFactory.create = function(userData){
        return $http.post('/api/users/', userData);
    };
    
    // update a user
    userFactory.update = function(id, userData){
        return $http.put('/api/users/'+id, userData);
    };
    
    // delete a user
    userFactory.delete = function(id){
        return $http.delete('/api/users/' + id);
    };
    
    // return our entire user object
    return userFactory;
}]);