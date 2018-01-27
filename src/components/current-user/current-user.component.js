class CurrentUserComponentController {

    constructor(UserService, LoginService, $state) {
        this.$state       = $state;
        this.LoginService = LoginService;
        this.UserService  = UserService;
        this.currentUser  = this.UserService.getUser();
    };

    logout() {
        this.LoginService
            .logOut()
            .then(() => {
                this.UserService.resetUser();
                this.$state.go('app.login');
            }).catch((error) => { console.log('LOGOUT ERROR: ', error); });
    }

    settings() {
        this.$state.go('app.users.current', { id: this.UserService.getUser()._id })
    }

}

export default {
    template: require('./current-user.template.pug'),
    controller: CurrentUserComponentController,
    controllerAs: 'vc',
};