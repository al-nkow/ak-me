import ForgotPasswordModalController from '../../components/forgot-password-modal/forgot-password-modal.controller';
export default class LoginController {

    constructor(LoginService, RouteService, ngToast, $mdDialog, LetterForgotPassword, $stateParams, SampleService) {
        this.LoginService = LoginService;
        this.RouteService =RouteService;
        this.ngToast = ngToast;
        this.$mdDialog =$mdDialog;
        this.LetterForgotPassword = LetterForgotPassword;
        this.SampleService= SampleService;
        this.getSample($stateParams.sample);
        this.hideForm = false;
    }

    /**
     * Get sample and login user as 'guest'
     * @param token
     */
    getSample(token) {
        if (!token) return false;
        this.SampleService.getSharedLinkById(token).then((res) => {
            if (res.status !== 200) {
                this.ngToast.create('ERROR', 'alert', 1000);
                return false;
            }
            if (res && res.data) {
                this.user = {email: 'guest@guest.com', password: 'DV5V3nLqKt6C'};
                this.logIn({token: token, filter: res.data.filter});
            } else {
                this.ngToast.create('Token is incorrect!', 'alert', 1000);
            }
        }).catch((err) => {
            this.ngToast.create('ERROR', 'alert', 1000);
            console.log('GET SHARED LINK ERROR: ', err);
        });
    }

    logIn(guest) {
        window.localStorage.removeItem('GUEST');
        this.LoginService.logIn(this.user).then((res) => {
            this.hideForm = true;
            let params = {};
            if (guest) {
                window.localStorage.setItem('GUEST', JSON.stringify(guest));
                params = guest.filter && guest.filter.direction && guest.filter.sortName ? {
                    direction: guest.filter.direction,
                    sortName: guest.filter.sortName
                } : {};
            }

            this.RouteService.go('app.dashboard', params);
        }).catch((err) => {
            console.log("Failed to sign in:", err);
            let errorMsg = err && err.data ? `ERROR: ${err.data.message}` : 'Failed to sign in';
            this.ngToast.create(errorMsg, 'alert', 1000);
        });
    }

    showForgotPasswordModal(ev) {
        this.$mdDialog.show({
            controller: ForgotPasswordModalController,
            controllerAs: 'vc',
            template: require('../../components/forgot-password-modal/forgot-password-modal.template.pug'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        }).then((data) => {
            this.checkEmailExist(data);
        }).catch(() => { });
    }

    /**
     * Verification of the existence of an address
     * @param {object} data
     */
    checkEmailExist(data) {
        this.LoginService.searchEmail(data).then((res) => {
            if (res.status !== 200) {
                this.ngToast.create('EMAIL CHECK ERROR', 'alert');
                console.log('EMAIL CHECK ERROR: ', res);
            } else if (res && res.data && res.data.length) {
                this.sendResetPasswordLetter(data.email);
            } else {
                this.ngToast.create(`We couldn't find this email, please try another one`, 'alert')
            }
        }).catch((err) => {
            this.ngToast.create('EMAIL CHECK ERROR', 'alert');
            console.log('EMAIL CHECK ERROR: ', err);
        });
    }

    /**
     * Send an email with instructions on resetting the password
     * @param {string} email
     */
    sendResetPasswordLetter(email) {
        if (!email) return;
        let letter = {
            email: email,
            subject: 'Bekitzur HR Dashboard - Password reset',
            html: this.LetterForgotPassword.create()
        };
        this.LoginService.forgot(letter).then((res) => {
            if (res.status === 200) {
                this.ngToast.create('A letter with instructions for password recovery sent to the address you specified!', 'success', 1000);
            } else {
                this.ngToast.create('ERROR ' + res.status, 'alert', 1000);
                console.log('ERROR: ', res.data);
            }
        }).catch((err) => {
            this.ngToast.create('ERROR ' + err.status, 'alert', 1000);
            console.log('ERROR: ', err);
        });
    }

}

