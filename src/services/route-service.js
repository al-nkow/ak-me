import angular from 'angular';

class RouteService {

    constructor($state) {
        this.$state = $state;
    }

    go(to, params, options) {
        params = params || {};
        options = options || {};
        this.$state.go(to, params, options);
    };

    reload() {
        this.$state.reload();
    };

}

export default angular.module('services.route-service', [])
    .service('RouteService', RouteService)
    .name;