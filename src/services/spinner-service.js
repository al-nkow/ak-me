import angular from 'angular';

class SpinnerService {

    constructor() {
        this.loadingOverlay = angular.element(document.querySelector('#loading-overlay'));
    }

    showSpinner() {
        this.loadingOverlay.css( "display", "block");
        // this.loadingOverlay.show();
    }

    hideSpinner() {
        this.loadingOverlay.css( "display", "none");
        // this.loadingOverlay.hide();
    }

}

export default angular.module('services.spinner-service', [])
    .service('SpinnerService', SpinnerService)
    .name;