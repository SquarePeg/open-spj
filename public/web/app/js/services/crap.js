app.factory('crap', ['$http', function($http){
    return $http.get('/app/data/crap.json')
        .success(function(data){
            return data;
        })
        .error(function(err){
            return err;
        });
}]);