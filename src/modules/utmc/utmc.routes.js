export default function routes($stateProvider) {

    $stateProvider.state('root.portfolio.utmc', {
        url: '/utmc',
        views: {
            'content@': {
                template: require('./utmc.template.pug'),
                controller: 'UtmcController',
                controllerAs: 'vc'
            }
        }
    });

}