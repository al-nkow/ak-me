angular.module('myApp').controller('MenuCtrl', MenuCtrlFunc);
MenuCtrlFunc.$inject = ['$state', '$timeout', '$log', '$scope', '$rootScope', '$timeout', '$state', '$mdSidenav'];
function MenuCtrlFunc($state, $timeout, $log, $scope, $rootScope, $timeout, $state, $mdSidenav) {
	
	var self = this;
		
	this.$rootScope = $rootScope;
	this.$scope     = $scope;
	this.$timeout   = $timeout;
	this.$state     = $state;
	this.hover      = false;
	this.settings   = null;
	this.menuactive = false;
	this.menu = [
		{
			name: 'home',
			url: 'root'
		},{
			name: 'about',
			url: 'root.about'
		},{
			name: 'portfolio',
			url: 'root.portfolio'
		},{
			name: 'contacts',
			url: 'root.contacts'
		}
	];

	this.toggleRight = function() {
		if (!self.menuactive) self.menuactive = true;
		$mdSidenav('right').toggle();
		$mdSidenav('right').onClose(function () {
			self.menuactive = false;
		});
	};

	this.selectMenu = function(url) {
		$mdSidenav('right').close();
		$state.go(url);
	}

};