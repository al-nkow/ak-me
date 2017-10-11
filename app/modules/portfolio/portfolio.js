angular.module('myApp.portfolio', []).controller('PortfolioCtrl', PortfolioCtrlFunc);
function PortfolioCtrlFunc($scope, $rootScope) {
	
	var self = this;

	this.$rootScope = $rootScope;
	this.$scope     = $scope;
	
	this.init = function() {
		console.log('--- PortfolioCtrl ---');
	}

	this.init();
};
