export default function routes($stateProvider) {

    $stateProvider.state('app.users.reset-password', {
        url: '/reset-password?token',
        views: {
            'content@': {
                controller: 'ResetPasswordController',
                controllerAs: 'vc',
                template: require('./reset-password.template.pug')
            }
        }
    });

}