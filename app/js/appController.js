angular.module('myApp').controller('AppController', AppControllerFunc);
// AppControllerFunc.$inject = ['$log', '$scope', '$rootScope'];
function AppControllerFunc($log, $scope, $rootScope) {
	
	var self = this;
	this.$rootScope = $rootScope;

};