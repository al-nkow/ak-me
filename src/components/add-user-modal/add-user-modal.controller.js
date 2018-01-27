
    export default class AddUserModalController {

        constructor(LoginService, $mdDialog, ngToast, roles, projects) {
            this.LoginService = LoginService;
            this.$mdDialog = $mdDialog;
            this.ngToast = ngToast;

            this.roles = roles;
            this.projects = projects;
            this.data = {role: 'user'};
        }

        cancel() {
            this.$mdDialog.cancel();
        };

        /**
         * Check if a user with the same name exists
         * @param {object} data
         */
        // this.loginCheck = (data) => {
        //     this.LoginService.searchLogin({username: data.username}).then( (res) => {
        //         if (res.status != 200) {
        //             ngToast.create('LOGIN CHECK ERROR', 'alert');
        //             console.log('LOGIN CHECK ERROR: ', res);
        //         }
        //         if (res && res.data && res.data.length) {
        //             ngToast.create('A user with this username is already registered in the system!', 'alert');
        //             return false;
        //         } else {
        //             this.checkEmail(data);
        //         }
        //     }).catch( (err) => {
        //         ngToast.create('LOGIN CHECK ERROR', 'alert');
        //         console.log('LOGIN CHECK ERROR: ', err);
        //     });
        // };

        /**
         * Check if a user with the same email exists
         * @param {object} data
         */
        checkEmail(data) {
            this.LoginService.searchEmail({email: data.email}).then((res) => {
                if (res.status != 200) {
                    this.ngToast.create('EMAIL CHECK ERROR', 'alert');
                    console.log('EMAIL CHECK ERROR: ', res);
                }
                if (res && res.data && res.data.length) {
                    this.ngToast.create('A user with this email address is already registered in the system!', 'alert');
                    return false;
                } else {
                    this.$mdDialog.hide(data);
                }
            }).catch((err) => {
                this.ngToast.create('EMAIL CHECK ERROR', 'alert');
                console.log('EMAIL CHECK ERROR: ', err);
            });
        };

        confirm(form) {
            if (form.$invalid) return false;
            if (this.data.role !== 'customer' && this.data.project) {
                delete this.data.project;
            }
            if (!this.data.role) this.data.role = 'user';
            this.checkEmail(this.data);
        };

    }
