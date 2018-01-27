class InterviewHeadComponentController {

    constructor($scope) {
        this.toggle = this.toggle || false;
        $scope.$watch(() => { return this.toggle }, (newVal, oldVal) => {
            if (newVal === oldVal) return;
            $scope.$emit('INTERVIEW_EDIT_MODE_CHANGED', newVal);
        });
    }
}

export default {
    template: require('./int-head.template.pug'),
    controller: InterviewHeadComponentController,
    controllerAs: 'vc',
    bindings: {
        candidate: '=?',
        user: '=?',
        card: '=?',
        users: '=?'
    }
}
