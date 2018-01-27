import angular from 'angular';

class UtilsService {

    constructor($q, $http) {
        this.$q = $q;
        this.$http = $http;
    }

    createPromise(url, method, data, config) {
        let $http = this.$http;
        let deferred = this.$q.defer();
        if (!config) {
            config = {};
        }
        switch ((method || '').toUpperCase()) {
            case 'GET':
                $http.get(url, config).then((response) => {
                    deferred.resolve(response);
                }).catch((err) => {
                    deferred.reject(err);
                });
                break;
            case 'POST':
                $http.post(url, data, config).then((response) => {
                    deferred.resolve(response);
                }).catch((err) => {
                    deferred.reject(err);
                });
                break;
            default:
                throw new Error('Unknown method: ' + method);
        }

        return deferred.promise;
    }

    checkResponse(response, successCb, errCb) {
        if (response.status === 200) {
            successCb(response);
        } else {
            errCb(response);
        }
    }

}

export default angular.module('services.utils-service', [])
    .service('UtilsService', UtilsService)
    .name;