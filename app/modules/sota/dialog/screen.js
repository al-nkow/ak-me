angular.module('myApp.portfolio').controller('DialogController', DialogControllerFunc);
function DialogControllerFunc($window, $scope, $mdDialog, screens, currentIndex) {

    var self = this;

	this.screens = screens;
	this.current = currentIndex;

    this.init = function() {
        $window.addEventListener('keydown', function(event) {
            if (event.key == 'ArrowRight') {
                self.moveFront(true);
            } else if (event.key == 'ArrowLeft') {
                self.moveBack(true);
            }
        });
    };

    this.moveFront = function(key) {
        self.current = self.current == self.screens.length - 1 ? 0 : self.current + 1;
        if (key) $scope.$apply();
    }
    this.moveBack = function(key) {
        self.current = self.current == 0 ? self.screens.length - 1 : self.current - 1;
        if (key) $scope.$apply();
    }

    this.hide = function() {
        $mdDialog.hide();
    };

    this.cancel = function() {
        $mdDialog.cancel();
    };

    this.answer = function(answer) {
        $mdDialog.hide(answer);
    };

    this.init();
}