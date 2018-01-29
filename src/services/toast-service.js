import angular from 'angular';

class ToastService {

    constructor($mdToast) {
        this.$mdToast = $mdToast;
    }

    // create(text, type, delay, position) {
    //     this.$mdToast.show(this.$mdToast.simple({
    //         template: '<md-toast>' +
    //         '<div class="md-toast-content ' + type + '">' +
    //         text +
    //         '</div>' +
    //         '</md-toast>',
    //         hideDelay: delay || 2000,
    //         position: position || 'top right'
    //     }));
    // }

    show(type, time, text, position) {
        let pos = position || 'top right';
        this.$mdToast.show(
            this.$mdToast.simple()
                .toastClass(type)
                .hideDelay(time)
                .textContent(text)
                .position(pos)
        );
    }
}

export default angular.module('services.toast-service', [])
    .service('amToast', ToastService)
    .name;