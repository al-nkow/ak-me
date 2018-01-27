class DevTabsComponentController {

    constructor($state, $stateParams) {
        this.state = $stateParams.type;
        this.$state = $state;
        this.links = [
            {
                url: 'hr',
                name: 'HR'
            },{
                url: 'expert',
                name: 'Expert'
            },{
                url: 'common',
                name: 'Common'
            },{
                url: 'devops',
                name: 'DevOps'
            },{
                url: 'qa',
                name: 'QA'
            },{
                url: 'automation',
                name: 'ATQA'
            },{
                url: 'storage',
                name: 'Storages'
            },{
                url: 'data',
                name: 'Data Processing'
            },{
                url: 'java',
                name: 'Java'
            },{
                url: 'web',
                name: 'Web'
            },{
                url: 'python',
                name: 'Python'
            },{
                url: 'android',
                name: 'Android'
            },{
                url: 'ios',
                name: 'iOS'
            },{
                url: 'pmux',
                name: 'PM/UX'
            },{
                url: 'cplus',
                name: 'C++'
            }
        ];
    }

    goToLink (url) {
        this.$state.go('app.card.resume.interview', {type: url});
    }
}

export default {
    template: require('./int-tabs.template.pug'),
    controller: DevTabsComponentController,
    controllerAs: 'vc',
    bindings: {
        candidate: '='
    }
}
