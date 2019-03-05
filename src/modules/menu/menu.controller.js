export default class MenuController {

    constructor($state, $timeout, $scope, $rootScope, $mdSidenav) {
        this.$mdSidenav = $mdSidenav;
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

        $scope.$on('OPEN_MENU', () => {
            if (!this.menuactive) this.toggleRight();
        });

        $scope.$on('CLOSE_MENU', () => {
            if (this.menuactive) this.toggleRight();
        });
    }

    toggleRight() {
        if (!this.menuactive) this.menuactive = true;
        this.$mdSidenav('right').toggle();
        this.$mdSidenav('right').onClose(() => {
            this.menuactive = false;
        });
    };

    selectMenu(url) {
        this.$mdSidenav('right').close();
        this.$state.go(url);
    }

};