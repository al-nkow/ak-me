import angular from 'angular';

class SampleService {

    constructor($http) {
        this.$http = $http;
    }

    saveFilter(data) {
        return this.$http.post('api/candidate/filter', data);
    }

    generateLink(data) {
        return this.$http.post('api/candidate/share', data);
    }

    getSharedLinkById(token) {
        return this.$http.get(`api/candidate/share/${token}`);
    }

    getSharedLinks() {
        return this.$http.get('api/candidate/share');
    }

    deleteSharedLink(id) {
        return this.$http.delete(`api/candidate/share/${id}`);
    }

    getList(token) {
        return this.$http.get('api/candidate/filter/' + token);
    }

}

export default angular.module('services.sample-service', [])
    .service('SampleService', SampleService)
    .name;