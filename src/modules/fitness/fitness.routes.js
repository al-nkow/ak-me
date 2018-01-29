export default function routes($stateProvider) {

    $stateProvider.state('root.portfolio.fitness', {
        url: '/fitness',
        views: {
            'content@': {
                template: require('./fitness.template.pug'),
                controller: 'FitnessController',
                controllerAs: 'vc'
            }
        }
    });

}