//angular.module('navModule', [])

app.factory('NavService', function($http){
    
    // create a new object
    var navFactory = {};
    
    navFactory.navigation = {
        logoText: '',
        navLinks: {}
    };
    
    navFactory.get = function( theRole ){
        return $http.post('/api/nav',{
            role: theRole
        })
        .success(function(data){
            navFactory.set( data.navigation );
            //return data.navigation;
            return {
                success: true,
                navigation: data.navigation
            };
        })
    };
    
    navFactory.set = function( theNav ){
        // only set these two properties to keep object clean
        navFactory.navigation.logoText = theNav.logoText;
        navFactory.navigation.navLinks = theNav.navLinks;
        console.log("NavService set " + navFactory.getLogoText());
    };
    
    navFactory.getLogoText = function(){
        return navFactory.navigation.logoText;
    };
    
    navFactory.getNavLinks = function(){
        return navFactory.navigation.navLinks;
    };
    
    return navFactory;
    
});