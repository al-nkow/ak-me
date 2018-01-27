import AddMailTemplateModalController from '../../components/add-mail-template-modal/add-mail-template-modal.controller';

export default class MailTemplatesController {

    constructor($mdDialog, EmailTemplateService, ngToast, Templates, $state) {
        this.$mdDialog = $mdDialog;
        this.EmailTemplateService = EmailTemplateService;
        this.ngToast = ngToast;
        this.templates = Templates;
        this.$state = $state;
    }

    /**
     * Template modal
     * @param ev
     */
    showTemplateModal(ev, item) {
        this.$mdDialog.show({
            controller: AddMailTemplateModalController,
            controllerAs: 'vc',
            template: require('../../components/add-mail-template-modal/add-mail-template-modal.template.pug'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            locals: { template: item }
        }).then((data) => {
            if (data && data._id) {
                this.updateTemplate(data);
            } else {
                this.saveTemplate(data);
            }
        });
    };

    /**
     * Save email template
     * @param {object} data
     */
    saveTemplate(data) {
        this.EmailTemplateService.save(data).then((res) => {
            if (res.status == 200) {
                this.ngToast.create('Template successfully saved', 'success');
                this.$state.reload();
            } else {
                this.ngToast.create('ERROR', 'alert');
            }
        }).catch((err) => {
            this.ngToast.create('ERROR', 'alert');
            console.log('SAVE TEMPLATE ERROR: ', err);
        });
    };

    /**
     * Update email template
     * @param {object} data
     */
    updateTemplate(data) {
        this.EmailTemplateService.update(data).then((res) => {
            if (res.status == 200) {
                this.ngToast.create('Template successfully updated', 'success');
                this.$state.reload();
            } else {
                this.ngToast.create('ERROR', 'alert');
            }
        }).catch((err) => {
            this.ngToast.create('ERROR', 'alert');
            console.log('UPDATE TEMPLATE ERROR: ', err);
        });
    };

    /**
     * Call template deletion dialog
     * @param ev - angular $event
     * @param {object} item - current template
     */
    showDeleteModal(ev, item) {
        ev.stopPropagation();
        let confirm = this.$mdDialog.confirm()
            .title('Сonfirm the action')
            .textContent('Are you sure you want to delete "' + item.title + '" ?')
            .ariaLabel('Delete item')
            .targetEvent(ev)
            .ok('Delete')
            .cancel('Cancel');
        this.$mdDialog.show(confirm).then(() => {
            this.deleteTemplate(item._id);
        });
    };

    /**
     * Delete email template
     * @param {string} id
     */
    deleteTemplate(id) {
        if (!id) return false;
        this.EmailTemplateService.delete(id).then((res) => {
            if (res.status === 200) {
                this.ngToast.create('Template successfully deleted', 'success');
                this.$state.reload();
            } else {
                this.ngToast.create('ERROR', 'alert');
                console.log('DELETE TEMPLATE: ', res);
            }
        }).catch((err) => {
            this.ngToast.create('ERROR', 'alert');
            console.log('DELETE TEMPLATE ERROR: ', err);
        });
    };

}

