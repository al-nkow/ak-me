export default function routes($stateProvider) {

    $stateProvider.state('root.portfolio.trafficstars', {
        url: '/trafficstars',
        views: {
            'content@': {
                template: require('./trafficstars.template.pug'),
                controller: 'TrafficstarsController',
                controllerAs: 'vc'
            }
        }
    });

}