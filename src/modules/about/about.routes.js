export default function routes($stateProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey') // cyan
        .accentPalette('deep-orange');

    $stateProvider.state('root.about', {
        url: 'about',
        views: {
            'content@': {
                template: require('./about.template.pug'),
                controller: 'AboutController',
                controllerAs: 'vc'
            }
        }
    });

}