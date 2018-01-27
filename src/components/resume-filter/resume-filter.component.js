import '../create-link/create-link.styles.less';
import CreateLinkModalCtrl from '../create-link/create-link.controller';

class ResumeFilterController {

    constructor($scope, $state, $stateParams, $mdDialog, SampleService, UserService, ngToast) {

        this.$scope = $scope;
        this.$state = $state;
        this.$mdDialog = $mdDialog;
        this.SampleService = SampleService;
        this.ngToast = ngToast;

        this.visible = $stateParams.filters !== 'no';
        this.filter = null;

        this.guest = UserService.getGuest();
        this.filter = this.generateFilterData($stateParams);
        if (this.guest && !this.guest.filter) this.guest.filter = {};

        $scope.$on('FILTERS_TOGGLE_EVENT', () => {
            this.visible = !this.visible;
            $state.go('.', {filters: this.visible ? 'yes' : 'no'}, {notify: false});
        });

    }

    /**
     * Generate data for filters by $statParams
     * @param {object} data - $stateParams
     */
    generateFilterData(data) {
        let params = angular.copy(data);
        if (params.createdAt) {
            let createdAt = JSON.parse(params.createdAt);
            params.createdAt = createdAt;
        }
        params.archive = params.archive === "true";
        return params;
    }

    /**
     * Saves the status of filters by clicking `CREATE A LINK` button
     * @param ev - angular $event
     */
    saveFilters(ev) {
        let data = angular.copy(this.filter);
        data = this.changeDataToSend(data);
        this.SampleService.generateLink(data).then((res) => {
            this.openLinkSampleModal(ev, res.data.token);
        }).catch((err) => {
            this.ngToast.create('ERROR', 'alert', 1000);
            console.log('DASHBOARD SAVE FILTERS ERROR: ', err);
        });
    }













    /**
     * Opens a dialog showing the generated link
     * @param ev - angular $event
     * @param {string} token
     */
    openLinkSampleModal(ev, token) {
        this.$mdDialog.show({
            controller: CreateLinkModalCtrl,
            controllerAs: 'vc',
            template: require('../create-link/create-link.template.pug'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            locals: {token: token, id: null}
        });
    }









    /**
     * Process data before sending to server
     * @param {object} data
     */
    changeDataToSend(data) {
        if (data && data.hasOwnProperty('skill_set') && (!data.skill_set || !data.skill_set.length)) {
            delete data.skill_set;
        }
        data.offset = 0;
        if (data.createdAt && data.createdAt.hasOwnProperty('from') && !data.createdAt.from) {
            delete data.createdAt.from;
        }
        if (data.createdAt && data.createdAt.hasOwnProperty('to') && !data.createdAt.to) {
            delete data.createdAt.to;
        }
        if ( angular.equals(data.createdAt, {}) ) delete data.createdAt;
        if (data.createdAt) data.createdAt = JSON.stringify(data.createdAt);

        return data;
    }

    /**
     * Apply filters
     */
    search() {
        let data = angular.copy(this.filter);
        data = this.changeDataToSend(data);
        this.$state.go('app.dashboard', data, {reload: false, inherit: false, notify: true});
    }

    /**
     * Clear all filters
     */
    reset() {
        if (this.filter) {
            this.filter.createdAt = null;
            this.$scope.$broadcast('md-calendar-change', this.filter.createdAt);
        }
        this.filter = null;
        this.$state.go('app.dashboard', {}, { reload: false, inherit: false, notify: true });
    }

}

export default {
        template: require('./resume-filter.template.pug'),
        controller: ResumeFilterController,
        controllerAs: 'vc',
        bindings: {
            states: '=?',
            priorities: '=?',
            skills: '=?',
            levels: '=?',
            user: '=?',
            projects: '=?'
        }
    };