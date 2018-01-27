export default class SetPasswordController {

    constructor(User, LoginService, ngToast, $state, $stateParams) {
        this.token = $stateParams.token;
        this.$state = $state;
        this.ngToast = ngToast;
        this.LoginService = LoginService;
        this.data = User || {};
        this.repeat = '';
    }

    apply() {
        this.LoginService.signup(this.token, this.data).then((res) => {
            if (res.status == 200) {
                this.ngToast.create('User has been registered', 'success', 1000);
                this.$state.go('app.login');
            } else {
                this.ngToast.create('ERROR ' + res.status, 'alert', 1000);
                console.log('USER REGISTER ERROR: ', res);
            }
        }).catch((err) => {
            this.ngToast.create('ERROR ' + err.status, 'alert', 1000);
            console.log('USER REGISTER ERROR: ', err);
        });
    }

}
