class ProjectSelectComponentController {

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

}

export default {
    template: require('./project-select.template.pug'),
    controller: ProjectSelectComponentController,
    controllerAs: 'vc',
    bindings: {
        model: '=?',
        projects: '=?',
        user: '=?',
        hideArr: '=?',
        resumeId: '=?',
        eventName: '=?'
    }
};