import angular from 'angular';

class ToastService {

    constructor($mdToast) {
        this.$mdToast = $mdToast;
    }

    create(text, type, delay, position) {
        this.$mdToast.show(this.$mdToast.simple({
            template: '<md-toast>' +
            '<div class="md-toast-content ' + type + '">' +
            text +
            '</div>' +
            '</md-toast>',
            hideDelay: delay || 2000,
            position: position || 'top right'
        }));
    }

}

export default angular.module('services.toast-service', [])
    .service('ngToast', ToastService)
    .name;