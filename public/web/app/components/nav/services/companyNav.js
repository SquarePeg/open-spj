angular.module('companyModule', [])

.factory('CompanyNavService', function($http){
    return $http.get('/app/components/nav/data/companyNav.json')
        .success(function(data){
            return data;
        })
        .error(function(err){
            return err;
        });
});