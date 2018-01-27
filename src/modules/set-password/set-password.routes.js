export default function routes($stateProvider) {

    $stateProvider.state('app.users.set-password', {
        url: '/set-password?token',
        views: {
            'content@': {
                controller: 'SetPasswordController',
                controllerAs: 'vc',
                template: require('./set-password.template.pug')
            }
        },
        resolve: {
            User: function(LoginService, $stateParams) {
                if ($stateParams.token) {
                    return LoginService.getInvitedUserByToken($stateParams.token).then(function (res) {
                        if (res.status == 200) {
                            return res.data;
                        } else {
                            console.log('ERROR: ', res);
                        }
                    }).catch(function (err) {
                        console.log('GET USER BY TOKEN ERROR: ', err);
                    });
                }
            }
        }
    });

}