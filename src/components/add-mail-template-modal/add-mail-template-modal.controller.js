export default class AddMailTemplateModalController {

    constructor($mdDialog, InsertAtCaret, locals) {
        this.$mdDialog = $mdDialog;
        this.data = locals.template ? angular.copy(locals.template) : {};
        this.InsertAtCaret = InsertAtCaret;
    }

    cancel() {
        this.$mdDialog.cancel();
    };

    confirm() {
        this.$mdDialog.hide(this.data);
    };

    insertName(id, model, key) {
        let insert = '%RECIPIENT_NAME%';
        this.InsertAtCaret.paste(id, insert, model, key);
    }

}
