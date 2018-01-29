export default class AppController {

    constructor($scope, $rootScope, $window) {
        this.$rootScope = $rootScope;
        this.show = false;
        angular.element($window).bind('load', () => {
            this.show = true;
            $scope.$apply();
        });
    }

}