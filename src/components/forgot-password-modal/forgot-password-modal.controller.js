export default class ForgotPasswordModalController {

    constructor($mdDialog, ngToast) {
        this.$mdDialog = $mdDialog;
        this.ngToast = ngToast;
    }

    cancel() {
        this.$mdDialog.cancel();
    }

    confirm() {
        this.$mdDialog.hide(this.data);
    }

}
