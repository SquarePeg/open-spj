app.directive('memberNavigation', function(){
    return {
        restrict: 'EA',
        controller: 'MemberNavController',
        controllerAs: 'navVM',
        templateUrl: '/app/components/nav/views/memberNav.html'
    };
});