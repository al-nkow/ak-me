export default function routes($stateProvider) {

    $stateProvider.state('root.portfolio.fundsource', {
        url: '/fundsource',
        views: {
            'content@': {
                template: require('./fundsource.template.pug'),
                controller: 'FundSourceController',
                controllerAs: 'vc'
            }
        }
    });

}