import angular from 'angular';

class ConfigService {

    constructor($http) {
        this.$http = $http;
    }

    getEnv() {
        return this.$http.get('env');
    }

}

export default angular.module('services.config-service', [])
    .service('ConfigService', ConfigService)
    .name;