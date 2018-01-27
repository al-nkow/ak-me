import AddEditProjectModalController from '../../components/add-project-modal/add-project-modal.controller';

export default class CompanyProjectsController {

    constructor($mdDialog, ProjectService, ngToast, Projects, $state) {
        this.ngToast = ngToast;
        this.$mdDialog = $mdDialog;
        this.ProjectService = ProjectService;
        this.projects = Projects || [];
        this.$state = $state;
    };

    /**
     * Show project modal (add/edit)
     * @param ev - angular $event
     * @param {object} item
     */
    showProjectModal(ev, item) {
        this.$mdDialog.show({
            controller: AddEditProjectModalController,
            controllerAs: 'vc',
            template: require('../../components/add-project-modal/add-project-modal.template.pug'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            locals: {project: item}
        }).then((data) => {
            if (data._id) {
                this.updateProject(data);
            } else {
                this.saveProject(data);
            }
        });
    };

    /**
     * Save project
     * @param {object} data
     */
    saveProject(data) {
        this.ProjectService.createProject(data).then((res) => {
            if (res && res.status === 200) {
                this.projects.push(res.data);
                this.ngToast.create('Project created', 'success', 1000);
            } else {
                console.log('PROJECT SAVE ERROR: ', res);
            }
        }).catch((err) => {
            this.ngToast.create('ERROR', 'alert', 1000);
            console.log('PROJECT SAVE ERROR: ', err);
        });
    };

    /**
     * Show delete project modal
     * @param ev - angular $event
     * @param {object} item - project
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
            this.deleteProject(item._id);
        });
    };

    /**
     * Delete project
     * @param {string} id
     */
    deleteProject(id) {
        if (!id) return false;
        this.ProjectService.deleteProject(id).then((res) => {
            if (res.status === 200) {
                this.ngToast.create('Project successfully deleted', 'success');
                this.$state.reload();
            } else {
                console.log('DELETE PROJECT ERROR: ', res);
            }
        }).catch((err) => {
            this.ngToast.create('ERROR', 'alert');
            console.log('DELETE PROJECT ERROR: ', err);
        });
    };

    /**
     * Update project function
     * @param {object} data
     */
    updateProject(data) {
        this.ProjectService.updateProject(data).then((res) => {
            if (res && res.status === 200) {
                this.ngToast.create('Project updated', 'success', 1000);
                this.$state.reload();
            } else {
                console.log('PROJECT UPDATE ERROR: ', res);
            }
        }).catch((err) => {
            this.ngToast.create('ERROR', 'alert', 1000);
            console.log('PROJECT UPDATE ERROR: ', err);
        });
    };

}