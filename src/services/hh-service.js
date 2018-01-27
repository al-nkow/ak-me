import angular from 'angular';

class HhService {

    constructor($http, UtilsService) {
        this.$http = $http;
        this.UtilsService = UtilsService;
    }

    getConfig() {
        return this.$http({
            method: 'GET',
            url: 'api/hh/config'
        }).then(function (res) {
            if (res.status == 200) {
                var hhOauthUrl = 'https://hh.ru/oauth/authorize?response_type=code&client_id={client_id}&redirect_uri={redirect_uri}';
                res.data.hhOauthUrl = hhOauthUrl.replace('{client_id}', res.data.hhClientId).replace('{redirect_uri}', res.data.hhRedirectUrl)
                return res.data;
            }
            console.log('getConfig ERROR: ', res);
        }).catch(function (err) { console.log('getConfig ERROR: ', err); });
    }

    hasToken() {
        return this.$http.get('/api/hh/hastoken');
    }

    setToken(token) { // (url, method, data, config)
        return this.$http.post('/api/hh/settoken', {authCode: token});
        // return this.UtilsService.createPromise('/api/hh/settoken', 'POST', {authCode: token});
    }

    getHhResume(id) {
        return this.$http.get(`/api/hh/getresume/${id}`);
        // return UtilsService.createPromise('/api/hh/getresume/' + id, 'GET');
    }

}

export default angular.module('services.hh-service', [])
    .service('HhService', HhService)
    .name;


