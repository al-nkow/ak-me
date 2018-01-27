export default class CreateLinkModalCtrl {

    constructor($mdDialog, $state, token, SampleService, ngToast, $timeout) {
        this.SampleService = SampleService;
        this.ngToast = ngToast;
        this.$timeout = $timeout;
        this.$mdDialog = $mdDialog;
        this.$state = $state;
        this.token = token;
        this.data = {};
        this.api_server = api_server; // 'http://localhost:3000/#/';
        this.sampleUrl = `${this.api_server}login?sample=`;
        this.getLinksList();
    }

    getLinksList() {
        this.SampleService.getSharedLinks().then((res) => {
            if (res.status !== 200) {
                this.ngToast.create('ERROR', 'alert', 1000);
                return false;
            }
            this.total = res.data.total;
            this.links = res.data.items;
            this.$timeout(() => {
                this.inited = true;
            }, 2000);
        }).catch((err) => {
            this.ngToast.create('ERROR', 'alert', 1000);
            console.log('GET SHARED LINKS ERROR: ', err);
        });
    };

    deleteLink(id) {
        this.SampleService.deleteSharedLink(id).then((res) => {
            if (res.status !== 200) {
                this.ngToast.create('ERROR', 'alert', 1000);
                return false;
            }
            this.getLinksList();
        }).catch((err) => {
            this.ngToast.create('ERROR', 'alert', 1000);
            console.log('DELETE SHARED LINK ERROR: ', err);
        });
    };

    onCopySuccess() {
        this.ngToast.create('Text has been copied to clipboard', 'success', 1000);
    };

    onCopyError() {
        this.ngToast.create('ERROR', 'alert', 1000);
    };

    previewSample() {
        this.SampleService.getSharedLinkById(this.token).then((res) => {
            if (res.status !== 200) {
                this.ngToast.create('ERROR', 'alert', 1000);
                return false;
            }
            let url = this.$state.href('app.dashboard', res.data.filter);
            window.open(`${this.api_server}${url.slice(2, url.length)}`, '_blank');
        }).catch((err) => {
            this.ngToast.create('ERROR', 'alert', 1000);
            console.log('GET SHARED LINK ERROR: ', err);
        });
    };

    cancel() {
        this.$mdDialog.cancel();
    };

}


