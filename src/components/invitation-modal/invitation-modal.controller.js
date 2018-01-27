export default class InvitationModalController {

    constructor($mdDialog, templates, resume, user) {
        this.resume = resume;
        this.user = user;
        this.$mdDialog = $mdDialog;
        this.templates = templates;
        this.data = {};
        this.current = null;
    }

    selectTemplate() {
        this.data = angular.copy(JSON.parse(this.current));
        this.data.body = this.data.body.replace(/%RECIPIENT_NAME%/g, this.resume.first_name);
        this.data.subject = this.data.subject.replace(/%RECIPIENT_NAME%/g, this.resume.first_name);
        this.data.replyTo = this.user.email;
    };

    cancel() {
        this.$mdDialog.cancel();
    };

    confirm() {
        this.data.to = this.resume.contact.email;
        this.$mdDialog.hide(self.data);
    };

    clear() {
        this.data = {};
        this.current = null;
    };

}