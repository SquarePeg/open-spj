angular.module('memberModule', [])

.factory('MemberService', function($http){
    return $http.get('/app/components/nav/data/memberNav.json')
        .success(function(data){
            return data;
        })
        .error(function(err){
            return err;
        });
});