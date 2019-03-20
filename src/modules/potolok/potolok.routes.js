export default function routes($stateProvider) {

    $stateProvider.state('root.portfolio.potolok', {
        url: '/potolok',
        views: {
            'content@': {
                template: require('./potolok.template.pug'),
                controller: 'PotolokController',
                controllerAs: 'vc'
            }
        }
    });

}