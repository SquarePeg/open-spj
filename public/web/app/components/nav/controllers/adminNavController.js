app.controller('AdminNavController', ['$rootScope', 'NavService',
    function ($rootScope, NavService) {

    var vm = this;
      
    NavService.get('super').success(function(data){
        vm.logoText = data.logoText;
        vm.navLinks = data.navLinks;
    });
        
}]);
