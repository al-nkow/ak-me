export default class AddFilesModalController {

    constructor($mdDialog) {
        this.$mdDialog = $mdDialog;
        this.files = null;
    }

    addFiles(files, invalidFiles) {
        this.files = files;
        this.invalidFiles = invalidFiles;
    };

    cancel() {
        this.$mdDialog.cancel();
    };

    confirm() {
        this.invalidFiles.length
            ? this.$mdDialog.cancel(this.invalidFiles)
            : this.$mdDialog.hide(this.files)
    };


}