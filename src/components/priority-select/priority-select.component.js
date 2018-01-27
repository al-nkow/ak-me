class PrioritySelectComponentController {

    constructor($scope) {
        this.$scope = $scope;
        this.model = this.model || null;
        this.oldValue = this.model;

        if (this.eventName) {
            this.$scope.$watch(() => {
                return this.model;
            }, (newVal, oldVal) => {
                if (newVal === oldVal) return;
                this.oldValue = {model: this.model, date: this.date};
            });
        }
    };

    onChange() {
        if (this.eventName) {
            this.$scope.$emit(this.eventName, {old: this.oldValue, new: this.model, id: this.resumeId});
        }
    }

};

export default {
    template: require('./priority-select.template.pug'),
    controller: PrioritySelectComponentController,
    controllerAs: 'vc',
    bindings: {
        model: '=?',
        priorities: '=?',
        user: '=?',
        hideArr: '=?',
        resumeId: '=?',
        eventName: '=?'
    }
};