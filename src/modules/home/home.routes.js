export default function routes($stateProvider) {

    $stateProvider .state('root', {
        url: '/',
        // abstract: 'true',
        views: {
            'content@': {
                template: require('./home.template.pug'),
                controller: 'HomeController',
                controllerAs: 'vc',
            },
            'sidebar@': {
                template: require('../menu/menu.template.pug'),
                controller: 'MenuController',
                controllerAs: 'mc',
            }
        }
    });

}