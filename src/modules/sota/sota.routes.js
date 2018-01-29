export default function routes($stateProvider) {

    $stateProvider.state('root.portfolio.sota', {
        url: '/sota',
        views: {
            'content@': {
                template: require('./sota.template.pug'),
                controller: 'SotaController',
                controllerAs: 'vc'
            }
        }
    });

}