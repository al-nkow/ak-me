export default class SidebarController {

    constructor(UserService, $rootScope) {
        this.$rootScope = $rootScope;
        this.currentUser = UserService.getUser();
        this.collapse = false;

        let collapse = window.sessionStorage.getItem('MENU');
        if (collapse) {
            collapse = JSON.parse(collapse);
            this.collapse = collapse.collapse;
        }

        $rootScope.$on('USER_CHANGED', (event, data) => {
            this.currentUser = data;
        });

    }

    toggleMenu() {
        this.collapse = !this.collapse;
        window.sessionStorage.setItem('MENU', JSON.stringify({ collapse: this.collapse }));
    }

}

SidebarController.$inject = ['UserService', '$rootScope'];
