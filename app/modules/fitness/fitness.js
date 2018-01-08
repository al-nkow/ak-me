angular.module('myApp').controller('FitnessCtrl', FitnessCtrlFunc);
function FitnessCtrlFunc($mdDialog, $timeout) {

    var self = this;
    var wrap = angular.element(document.querySelector('#maincontent'));

    this.showbut = false;
    this.top = 0;
    this.$timeout = $timeout;

    this.init = function() {
        this.$timeout(function() {
            if (self.top === 0) self.showbut = true;
        }, 2000);
        wrap.bind('scroll', function() {
            self.top = wrap[0].scrollTop;
            self.showbut = self.top === 0;
        });
    };

    this.screens = [
        '/images/fitness/fitness0.jpg',
        '/images/fitness/fitness1.jpg',
        '/images/fitness/fitness2.jpg',
        '/images/fitness/fitness3.jpg'
    ];

    // this.showScreen = function(ev, index) {
    //     ev.stopPropagation();
    //     $mdDialog.show({
    //         controller: 'DialogController',
    //         controllerAs: 'vc',
    //         templateUrl: '/templates/sota/dialog/screen.html',
    //         parent: angular.element(document.body),
    //         targetEvent: ev,
    //         clickOutsideToClose:true,
    //         // fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    //         locals: {
    //             screens: self.screens,
    //             currentIndex: index
    //         }
    //     })
    //         .then(function(answer) {
    //             // $scope.status = 'You said the information was "' + answer + '".';
    //         }, function() {
    //             // $scope.status = 'You cancelled the dialog.';
    //         });
    // };

    this.init();

};