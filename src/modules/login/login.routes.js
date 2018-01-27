export default function routes($stateProvider) {

    $stateProvider.state('app.login', {
        url: '/login?sample',
        views: {
            'content@': {
                controller: 'LoginController',
                controllerAs: 'lc',
                template: require('./login.template.pug'),
            }
        }
    });

}