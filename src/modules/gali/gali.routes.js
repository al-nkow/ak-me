export default function routes($stateProvider) {

    $stateProvider.state('root.portfolio.gali', {
        url: '/gali',
        views: {
            'content@': {
                template: require('./gali.template.pug'),
                controller: 'GaliController',
                controllerAs: 'vc'
            }
        }
    });

}