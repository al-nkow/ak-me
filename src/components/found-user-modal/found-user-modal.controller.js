export default class FoundUserModalController {

    constructor($mdDialog, resume) {
        this.$mdDialog = $mdDialog;
        this.resume = resume;
    }

    cancel() {
        this.$mdDialog.cancel();
    }

    confirm() {
        this.$mdDialog.hide(this.resume._id);
    }

}