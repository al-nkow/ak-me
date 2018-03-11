export default function routes($stateProvider) {

    // $mdThemingProvider.theme('default')
    //     .primaryPalette('blue-grey') // cyan
    //     .accentPalette('deep-orange');

    $stateProvider.state('root.contacts', {
        url: 'contacts',
        views: {
            'content@': {
                template: require('./contacts.template.pug'),
                controller: 'ContactsController',
                controllerAs: 'vc'
            }
        }
    });

}