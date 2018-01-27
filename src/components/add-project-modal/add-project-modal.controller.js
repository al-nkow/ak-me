export default class AddEditProjectModalController {

    constructor($mdDialog, project) {
        this.$mdDialog = $mdDialog;
        this.data = project ? angular.copy(project) : {};
    }

    cancel() {
        this.$mdDialog.cancel();
    };

    confirm() {
        this.$mdDialog.hide(this.data);
    };

}


