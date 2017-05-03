app.controller('MemberNavController', ['$rootScope', 'NavService',
    function ($rootScope, NavService) {

    var vm = this;
      
    NavService.get('member').success(function(data){
        vm.logoText = data.logoText;
        vm.navLinks = data.navLinks;
    });
        
}]);
