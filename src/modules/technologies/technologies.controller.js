import AddTechModalController from '../../components/add-tech-modal/add-tech-modal.controller';

export default class TechnologiesController {

    constructor(Skills, $mdDialog, $http, ngToast) {
        this.$http = $http;
        this.$mdDialog = $mdDialog;
        this.ngToast = ngToast;
        this.skills = Skills;
        this.test = ['Apple', 'Banana', 'Orange'];
    }

    /**
     * Сall delete skill modal
     * @param ev
     * @param {object} skill
     */
    showDeleteModal(ev, skill) {
        ev.stopPropagation();
        let confirm = this.$mdDialog.confirm()
            .title('Сonfirm the action')
            .textContent('Are you sure you want to delete "' + skill.title + '" ?')
            .ariaLabel('Delete item')
            .targetEvent(ev)
            .ok('Delete')
            .cancel('Cancel');
        this.$mdDialog.show(confirm).then(() => {
            this.deleteSkill(skill._id);
        });
    };

    /**
     * Add skill modal
     * @param ev
     */
    showAddEditModal(ev, item) {
        this.$mdDialog.show({
            controller: AddTechModalController,
            controllerAs: 'vc',
            template: require('../../components/add-tech-modal/add-tech-modal.template.pug'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            locals: {skill: item}
        }).then((data) => {
            if (data && !data._id) {
                this.saveSkill(data);
            } else {
                this.updateSkill(data);
            }
        });
    };

    /**
     * Add skill
     * @param {object} data
     * @param {string} data.title
     * @param {array} data.aliases
     * @param {array} data.exceptions
     */
    saveSkill(data) {
        this.$http({
            method: 'POST',
            url: 'api/tech',
            data: data
        })
            .then((res) => {
                console.log('RES ADD:', res);
                if (res && res.config && res.config.data) {
                    this.skills.push(res.data);
                    this.ngToast.create('Technology added', 'success', 1000);
                }
            })
            .catch((err) => {
                this.ngToast.create('ERROR', 'alert', 1000);
                console.log('SAVE SKILL ERROR: ', err);
            });
    };

    /**
     * Update skill
     * @param {object} data
     * @param {string} data.title
     * @param {array} data.aliases
     * @param {array} data.exceptions
     * @param {string} data._id
     */
    updateSkill(data) {
        this.$http({
            method: 'PUT',
            url: 'api/tech/' + data._id,
            data: data
        })
            .then((res) => {
                if (res && res.data) {
                    this.skills = this.skills.map((item) => {
                        return item._id == res.data._id ? res.data : item;
                    });
                    this.ngToast.create('Technology updated', 'success', 1000);
                } else {
                    console.log('UPDATE SKILL ERROR: ', res);
                }
            })
            .catch((err) => {
                this.ngToast.create('ERROR', 'alert', 1000);
                console.log('UPDATE SKILL ERROR: ', err);
            });
    };

    /**
     * Delete skill
     * @param {string} id
     */
    deleteSkill(id) {
        if (!id) return;
        this.$http({
            method: 'DELETE',
            url: 'api/tech/' + id
        })
            .then((res) => {
                if (res.status == 200) {
                    this.skills = this.skills.filter((item) => {
                        return item._id != id;
                    });
                    this.ngToast.create('Technology deleted', 'success', 1000);
                } else {
                    this.ngToast.create('ERROR' + res.status, 'alert', 1000);
                    console.log('DELETE SKILL ERROR: ', res);
                }
            })
            .catch((err) => {
                this.ngToast.create('ERROR', 'alert', 1000);
                console.log('DELETE SKILL ERROR: ', err);
            });
    };

}

