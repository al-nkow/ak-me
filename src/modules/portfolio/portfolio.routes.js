export default function routes($stateProvider) {

    $stateProvider.state('root.portfolio', {
        url: 'portfolio',
        views: {
            'content@': {
                template: require('./portfolio.template.pug'),
                controller: 'PortfolioController as vc'
            }
        }
    });

}