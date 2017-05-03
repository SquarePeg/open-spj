app.directive('publicNavigation', function(){
    return {
        restrict: 'EA',
        controller: 'PublicNavController',
        controllerAs: 'navVM',
        templateUrl: '/app/components/nav/views/publicNav.html'
    };
});