import AddUserModalController from '../../components/add-user-modal/add-user-modal.controller';

export default class UsersController {

    constructor(Users, UserService, Roles, $mdDialog, LoginService, ngToast, LetterUserInvitation, Projects, CurrentUser) {
        this.userList = Users;
        this.UserService = UserService;
        this.Roles = Roles;
        this.$mdDialog = $mdDialog;
        this.LoginService = LoginService;
        this.ngToast = ngToast;
        this.LetterUserInvitation = LetterUserInvitation;
        this.Projects = Projects;
        this.currentUser = CurrentUser;
        this.isAdmin = this.currentUser.role === 'admin';
    }

    /**
     * New user modal
     * @param {object} ev - angular $event
     */
    registerUserModal(ev) {
        this.$mdDialog.show({
            controller: AddUserModalController,
            controllerAs: 'vc',
            template: require('../../components/add-user-modal/add-user-modal.template.pug'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            locals: {roles: this.Roles, projects: this.Projects}
        }).then((data) => {
            this.registerUser(data);
        });
    }

    /**
     * Send invitation email
     * @param {object} data
     * @param {string} data.to - address
     * @param {string} data.cc - copy
     * @param {string} data.subject
     * @param {string} data.html - body of message
     */
    sendInvitation(data) {
        this.LoginService.sendInvite(data).then((res) => {
            if (res.status === 200) {
                this.ngToast.create('Invitation sent', 'success', 1000);
            } else {
                this.ngToast.create('ERROR ' + res.status, 'alert', 1000);
                console.log('SEND INVITATION ERROR: ', res.data);
            }
        }).catch((err) => {
            this.ngToast.create('ERROR ' + err.status, 'alert', 1000);
            console.log('SEND INVITATION ERROR: ', err);
        });
    }

    /**
     * Register new user
     * @param {object} user - new user data
     */
    registerUser(user) {
        if (!user) return false;
        this.LoginService.getInviteToken(user).then((res) => {
            if (res.status == 200) {
                let letter = this.LetterUserInvitation.create(user, res.data);
                this.sendInvitation(letter);
            } else {
                this.ngToast.create('ERROR ' + res.status, 'alert', 1000);
                console.log('GET INVITE TOKEN ERROR: ', res.data);
            }
        }).catch((err) => {
            this.ngToast.create('ERROR ' + err.status, 'alert', 1000);
            console.log('GET INVITE TOKEN ERROR: ', err);
        });
    }

}

