export default function routes($stateProvider) {

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