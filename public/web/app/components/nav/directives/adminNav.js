app.directive('adminNavigation', function(){
    return {
        restrict: 'EA',
        controller: 'AdminNavController',
        controllerAs: 'navVM',
        templateUrl: '/app/components/nav/views/adminNav.html'
    };
});