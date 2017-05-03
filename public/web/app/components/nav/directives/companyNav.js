app.directive('companyNavigation', function(){
    return {
        restrict: 'EA',
        controller: 'CompanyNavController',
        controllerAs: 'navVM',
        templateUrl: '/app/components/nav/views/companyNav.html'
    };
});