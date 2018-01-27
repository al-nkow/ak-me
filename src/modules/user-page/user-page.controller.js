import ChangePasswordModalCtrl from '../../components/change-password-modal/change-password-modal.controller';

export default class UserPageController {

    constructor(User, CurrentUser, Roles, UserService, ngToast, $state, $mdDialog, $http) {
        this.UserService = UserService;
        this.ngToast = ngToast;
        this.$state = $state;
        this.$mdDialog = $mdDialog;
        this.$http = $http;
        this.currentUser = CurrentUser;
        this.user = angular.copy(User);
        this.roles = Roles;
        this.file = null;
    }

    /**
     * Upload user photo
     * @param {object} file
     * @param {array} errFiles
     */
    uploadFile(file, errFiles) {
        this.file = file;
        if (errFiles && errFiles[0] && errFiles[0].$error == 'maxSize') {
            this.ngToast.create('The maximum allowed image size is 1MB', 'alert');
            return false;
        }
        this.UserService.uploadPhoto(file, this.user._id).then(() => {
            this.ngToast.create('File uploaded', 'success');
            this.$state.reload();
        }).catch((err) => {
            this.ngToast.create('UPLOAD FILE ERROR', 'alert');
            console.log('UPLOAD FILE ERROR: ', err);
            this.file = null;
        });
    };

    /**
     * save changes in user profile
     */
    save() {
        this.UserService.updateUser(this.user).then((res) => {
            if (res && res.status === 200) {
                this.ngToast.create('User updated successfully', 'success');
            } else {
                this.ngToast.create('USER UPDATE ERROR', 'alert');
            }
        });
    };

    /**
     * Сall confirmation dialog to delete user
     * @param ev
     */
    delete(ev) {
        let confirm = this.$mdDialog.confirm()
            .title('Сonfirm the action')
            .textContent('Are you sure you want to delete user "' + this.user.name + '" ?')
            .ariaLabel('Delete item')
            .targetEvent(ev)
            .ok('Delete')
            .cancel('Cancel');
        this.$mdDialog.show(confirm).then(() => {
            this.UserService.deleteUser(this.user._id)
                .then((res) => {
                    if (res.status == 200) {
                        this.ngToast.create('User deleted successfully', 'success');
                        this.$state.go('app.users.list', {}, {reload: true});
                    }
                });
        });
    }

    /**
     * Change password modal
     * @param ev
     */
    changePassModal(ev) {
        this.$mdDialog.show({
            controller: ChangePasswordModalCtrl,
            controllerAs: 'vc',
            template: require('../../components/change-password-modal/change-password-modal.template.pug'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            // locals: {resume: resume}
        }).then((data) => {
            this.changePass(data);
        });
    };

    /**
     * Change password
     * @param {object} data
     * @param {string} data.old_password
     * @param {string} data.new_password
     */
    changePass(data) {
        this.$http({
            method: 'POST',
            url: 'api/user/reset/' + this.user._id,
            data: data
        }).then((res) => {
            if (res.status === 200) {
                this.ngToast.create('Password changed successfully', 'success');
            } else {
                console.log('ERROR', res);
            }
        }).catch((err) => {
            this.ngToast.create('ERROR', 'alert');
            console.log('ERROR: ', err);
        });
    };

}

