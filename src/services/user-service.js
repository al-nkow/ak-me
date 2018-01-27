import angular from 'angular';

class UserService {

    constructor($rootScope, $http, Upload) {
        this.Upload = Upload;
        this.currentUser = null;
        // this.utils = UtilsService;
        this.$rootScope = $rootScope;
        this.$http = $http;
    }

    isAdmin() {
        return this.currentUser ? this.currentUser.role === 'customer' : false;
    }

    isHR() {
        return this.currentUser ? this.currentUser.role === 'hr' : false;
    }

    isCustomer() {
        return this.currentUser ? this.currentUser.role === 'customer' : false;
    }

    uploadPhoto(file, id) {
        return this.Upload.upload({
            method: 'PUT',
            url: 'api/user/' + id,
            data: {avatar: file},
        }).then((res) => {
            let selfChange = (this.currentUser._id === (res && res.data._id));
            if (selfChange) this.currentUser.photo = res.data.photo;
            return res;
        }).catch((err) => { console.log('ERROR: ', err); });
    };

    getUserById(id) {
        return this.$http({
            method: 'GET',
            url: 'api/user/' + id
        }).then((res) => {
            return res;
        }).catch((err) => { console.log('ERROR: ', err); });
    };

    updateUser(user) {
        return this.$http({
            method: 'PUT',
            url: 'api/user/' + user._id,
            data: user
        }).then((res) => {
            return res;
        }).catch((err) => { console.log('ERROR: ', err); });
    };

    deleteUser(id) {
        return this.$http({
            method: 'DELETE',
            url: 'api/user/' + id
        }).then((res) => {
            return res;
        }).catch((err) => { console.log('ERROR: ', err); });
    };

    all() {
        return this.$http.get('/api/users');
        // return this.utils.createPromise('/api/users', 'GET');
    }

    getUser() {
        return this.currentUser;
    }

    setUser(body) {
        this.currentUser = body;
        this.$rootScope.$emit('USER_CHANGED', this.currentUser);
    }

    resetUser() {
        this.currentUser = null;
        window.localStorage.removeItem('GUEST');
        return true;
    }

    getGuest() {
        let guest = window.localStorage.getItem('GUEST');
        return guest ? JSON.parse(guest) : null;
    }

}

export default angular.module('services.user-service', [])
    .service('UserService', UserService)
    .name;
