class LangSelectComponentController {

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
    template: require('./lang-select.template.pug'),
    controller: LangSelectComponentController,
    controllerAs: 'vc',
    bindings: {
        model: '=?',
        levels: '=?',
        user: '=?',
        hideArr: '=?',
        resumeId: '=?',
        eventName: '=?'
    }
};