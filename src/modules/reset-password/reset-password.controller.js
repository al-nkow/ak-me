export default class ResetPasswordController {

    constructor(ngToast, $state, LoginService, $stateParams, LetterConfirmResetPassword) {
        this.data = {};
        this.token = $stateParams.token;
        this.LoginService = LoginService;
        this.ngToast = ngToast;
        this.$state = $state;
        this.LetterConfirmResetPassword = LetterConfirmResetPassword;
    }

    apply() {
        if (!this.data.password) return;

        let letter = {
            subject: 'Bekitzur HR Dashboard - Password reset confirmation',
            html: this.LetterConfirmResetPassword.create(this.data.password),
            password: this.data.password
        };

        this.LoginService.restorePass(this.token, letter).then((res) => {
            if (res.status == 200) {
                this.ngToast.create('The new password is set', 'success', 1000);
                this.$state.go('app.login');
            } else {
                this.ngToast.create('ERROR ' + res.status, 'alert', 1000);
                console.log('RESTORE PASSWORD ERROR: ', res);
            }
        }).catch((err) => {
            this.ngToast.create('ERROR ' + err.status, 'alert', 1000);
            console.log('RESTORE PASSWORD ERROR: ', err);
        });
    }

}

