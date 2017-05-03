//angular.module('navModule', [])

app.factory('AdminNavService', function($http){
    
    // create a new object
    var factory = {};
    
    factory.get = function(){
        return $http.post('/api/nav',{
            role: 'super'
        })
        .success(function(data){
            return {
                success: true,
                navigation: data.navigation
            };
        })
    };
    
    return factory;
    
});