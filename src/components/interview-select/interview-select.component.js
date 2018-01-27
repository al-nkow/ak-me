import moment from 'moment';

class InterviewSelectComponentController {

    constructor($scope) {
        this.$scope = $scope;
        this.oldValue = {model: this.model, date: this.date};
        this.isOpen = false;
        this.estimates = [{
            title: 'Passed',
            value: 'Yes'
        }, {
            title: 'Failed',
            value: 'No'
        }, {
            title: 'Scheduled',
            value: 'Scheduled'
        }];

        if (this.eventName) {
            this.$scope.$watchGroup([() => {
                return this.model;
            }, () => {
                return this.date;
            }], (newVal, oldVal) => {
                if (newVal === oldVal) return;
                this.oldValue = {model: this.model, date: this.date};
            });
        }
    }

    onChange() {
        if (this.model === 'Scheduled') {
            this.isOpen = true;
        } else if (this.date) {
            this.date = null;
        }
        if (this.eventName) this.sendEvent();

    }

    onDateChange() {
        if (this.eventName) this.sendEvent();
    }

    sendEvent() {
        let date = this.date ? moment(this.date).toISOString() : ''; // ISO 8601
        let newVal = {model: this.model, date: date};
        this.$scope.$emit(this.eventName, {old: this.oldValue, new: newVal, id: this.resumeId});
    }

}

export default {
    template: require('./interview-select.template.pug'),
    controller: InterviewSelectComponentController,
    controllerAs: 'vc',
    bindings: {
        model: '=',
        date: '=',
        user: '=?',
        hideArr: '=?',
        resumeId: '=?',
        eventName: '=?'
    }
};