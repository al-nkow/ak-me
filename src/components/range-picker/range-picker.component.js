import moment from 'moment';

class RangePickerComponentController {

    constructor($scope) {
        this.model = this.model || {};
        this.$scope = $scope;
        this.isOpenFrom = false;
        this.isOpenTo = false;
        this.viewModel = {};
        if (this.model && this.model.from) this.viewModel.from = moment(this.model.from, 'MMM DD, YYYY').toISOString();
        if (this.model && this.model.to) this.viewModel.to = moment(this.model.to, 'MMM DD, YYYY').toISOString();
        this.$scope.$watch(() => {
            return this.viewModel;
        }, (newVal, oldVal) => {
            if (JSON.stringify(newVal) === JSON.stringify(oldVal)) return false;
            if (this.model) {
                this.model.from = moment(this.viewModel.from).format('MMM DD, YYYY');
                this.model.to = moment(this.viewModel.to).format('MMM DD, YYYY');
            }
        }, true);
    };

}

export default {
    template: require('./range-picker.template.pug'),
    controller: RangePickerComponentController,
    controllerAs: 'vc',
    bindings: {
        model: '=?',
    }
};