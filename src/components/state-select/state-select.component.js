class StateSelectComponentController {

    constructor($scope, $mdMenu) {
        this.$scope = $scope;
        this.$mdMenu = $mdMenu;
        this.model = this.model || null;
        this.reason = this.reason || null;
        this.oldValue = {model: this.model, reason: this.reason};

        if (this.eventName) {
            this.$scope.$watchGroup([() => {
                return this.model;
            }, () => {
                return this.reason;
            }], (newVal, oldVal) => {
                if (newVal === oldVal) return;
                this.oldValue = {model: this.model, reason: this.reason};
            });
        }

        this.reasons = [
            {
                title: 'Accepted another offer',
                id: 1
            }, {
                title: 'Conflict person',
                id: 2
            }, {
                title: 'Little salary',
                id: 3
            }, {
                title: 'Not qualified enough',
                id: 4
            }, {
                title: 'Not ready to relocate',
                id: 5
            }, {
                title: 'Not willing to work in office',
                id: 6
            }, {
                title: 'Personal reasons',
                id: 7
            }
        ];

        this.reasonView = this.reasons.reduce((res, item) => { return item.id === this.reason ? item.title : res; }, null);

        $scope.$watch(() => { return this.model; }, (newVal, oldVal) => {
            if (newVal === oldVal || newVal !== 5) return false;
            this.openMenu(this.menu, this.el);
        });

    };

    onChange() {
        if (this.model !== 5) {
            this.reason = null;
            this.reasonView = null;
        }
        if (this.eventName) this.sendEvent();
    }

    openMenu($mdMenu, ev) {
        $mdMenu.open(ev);
    }

    selectMenuItem(item) {
        this.reason = item.id;
        this.reasonView = item.title;
        this.onChange();
    }

    sendEvent() {
        let newVal = { model: this.model, reason: this.reason };
        this.$scope.$emit(this.eventName, {old: this.oldValue, new: newVal, id: this.resumeId});
    }

}

export default {
    template: require('./state-select.template.pug'),
    controller: StateSelectComponentController,
    controllerAs: 'vc',
    bindings: {
        model: '=?',
        reason: '=?',
        states: '=?',
        user: '=?',
        hideArr: '=?',
        resumeId: '=?',
        eventName: '=?'
    }
};