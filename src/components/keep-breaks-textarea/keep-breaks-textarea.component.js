class keepBreaksTextAreaController {

    constructor($scope) {
        this.required = this.required ? true : false;
        $scope.$watch(() => {
            return this.model
        }, (newVal, oldVal) => {
            newVal ? this.initModel() : this.viewModel = '';
        });
        this.initModel();
    }

    initModel() {
        this.viewModel = this.model ? angular.copy(this.model.replace(/<br\/>/g, '\n')) : '';
    }

    /**
     * Change viewModel
     */
    changeModel() {
        this.model = this.viewModel ? this.viewModel.replace(/\n/g, '<br/>') : '';
    };

}

export default {
    template: require('./keep-breaks-textarea.template.pug'),
    controller: keepBreaksTextAreaController,
    controllerAs: 'vc',
    bindings: {
        id: '=?',
        placeholder: '=?',
        model: '=?',
        required: '=?'
    }
}

