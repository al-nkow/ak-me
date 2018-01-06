angular.module('myApp').controller('AppController', AppControllerFunc);
// AppControllerFunc.$inject = ['$log', '$scope', '$rootScope'];
function AppControllerFunc($log, $scope, $rootScope, $window) {
	
	var self = this;
	this.$rootScope = $rootScope;
    $scope.show = false;

    angular.element($window).bind('load', function() {
        $scope.show = true;
    });

};