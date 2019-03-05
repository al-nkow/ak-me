export default class AppController {
    constructor($scope, $rootScope, $window) {
        this.$rootScope = $rootScope;
        this.show = false;
        angular.element($window).bind('load', () => {
            this.show = true;
            $scope.$apply();
        });
    }

    onSwipeLeft(event, target) {
        this.$rootScope.$broadcast('OPEN_MENU');
    }

    onSwipeRight(event, target) {
        this.$rootScope.$broadcast('CLOSE_MENU');
    }
}