import angular from 'angular';

class LoginService {

    constructor($http, UserService) {
        this.$http = $http;
        this.UserService = UserService;
    }

    register(model) {
        return this.$http.post('/api/user/register', model).then(function (res) {
            return res;
        }).catch(function (err) {
            return err;
        });
    }

    /**
     * Will send a letter with instructions on changing the password
     * @param {object} data
     * @param {string} data.html - body of message
     * @param {string} data.email - email address
     */
    forgot(data) {
        return this.$http.post('api/user/forgot', data);
    }

    /**
     * Will save new password and send email about it
     * @param {string} token
     * @param {object} data
     * @param {string} data.html - body of message
     * @param {string} data.password - new password
     */
    restorePass(token, data) {
        return this.$http.post(`api/user/forgot/${token}`, data);
    }

    /**
     * Search email
     * @param {object} data
     * @param {string} data.email
     */
    searchEmail(data) {
        return this.$http({method: 'GET', url: 'api/user/search/email', params: data});
    }

    /**
     * Search login
     * @param {object} data
     * @param {string} data.username
     */
    searchLogin(data) {
        return this.$http({method: 'GET', url: 'api/user/search/username', params: data});
    }

    /**
     *
     * @param {string} token
     * @param {object} model
     */
    signup(token, model) {
        return this.$http.post('api/user/signup/' + token, model);
    }

    sendInvite(data) {
        return this.$http.post('api/user/email', data);
    }

    getInviteToken(model) {
        return this.$http.post('api/user/invite', model);
    }

    getInvitedUserByToken(token) {
        return this.$http.get('api/user/signup/' + token);
    }

    logIn(user) {
        return this.$http.post('/api/user/login', user, { withCredentials: true })
            .then((response) => {
                this.UserService.setUser(response.data);
                return response.data;
            });
        // return UtilsService.createPromise('/api/user/login', 'POST', user, {withCredentials: true}).then(function (response) {
        //     UtilsService.checkResponse(response, function (res) {
        //         UserService.setUser(res.data);
        //     });
        //     return response.data;
        // });
    }

    logOut() {
        return this.$http.get('/api/user/logout').then(() => {
            return this.UserService.resetUser();
        }).catch((err) => {
            console.log('LOGOUT_ERROR: ', err);
        });
    }

    me() {
        return this.$http.get('/api/user/me', null, {withCredentials: true}).then((res) => {
            if (res.data) this.UserService.setUser(res.data);
        }).catch((err) => {
            console.log('ME_ERROR: ', err);
        });
        // return UtilsService.createPromise(url, 'GET', null, {withCredentials: true}).then((response) => {
        //     UtilsService.checkResponse(response, (res) => {
        //         if (res.data)  UserService.setUser(res.data);
        //     });
        // });
    }

}

export default angular.module('services.login-service', [])
    .service('LoginService', LoginService)
    .name;
