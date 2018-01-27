export default class AddSkillModalCtrlFunc {

    constructor($mdDialog, skill) {
        this.$mdDialog = $mdDialog;
        this.data = skill ? angular.copy(skill) : { exceptions: [], aliases: [] };
    }

    cancel() {
        this.$mdDialog.cancel();
    };

    confirm() {
        if (!this.data.title) return;
        this.$mdDialog.hide(this.data);
    }

}