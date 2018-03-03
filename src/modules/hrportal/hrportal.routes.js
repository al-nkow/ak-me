export default function routes($stateProvider) {

    $stateProvider.state('root.portfolio.hrportal', {
        url: '/hrportal',
        views: {
            'content@': {
                template: require('./hrportal.template.pug'),
                controller: 'HRPortalController',
                controllerAs: 'vc'
            }
        }
    });

}