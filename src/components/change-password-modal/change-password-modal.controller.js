export default class ChangePasswordModalCtrl {

    constructor($mdDialog, ngToast) {
        this.$mdDialog = $mdDialog;
        this.ngToast = ngToast;
        this.data = {};
        this.again = '';
    }

    cancel() {
        this.$mdDialog.cancel();
    };

    confirm() {
        if (this.data.new_password.length < 3) {
            this.ngToast.create('Password length must be at least 3 characters!', 'alert', 1000);
            return false;
        }
        this.$mdDialog.hide(this.data);
    };

}
