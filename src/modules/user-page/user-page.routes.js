export default function routes($stateProvider) {

    $stateProvider.state('app.users.current', {
        // parent: 'app.users.list',
        url: '/current?id',
        views: {
            'content@': {
                controller: 'UserPageController',
                controllerAs: 'vc',
                template: require('./user-page.template.pug')
            }
        },
        resolve: {
            Roles: function (DictionaryService) {
                return DictionaryService.roles().then(function (res) {
                    if (res.status == 200) return res.data;
                    console.log('get roles error: ', res);
                });
            },
            User: function($stateParams, UserService) {
                return UserService.getUserById($stateParams.id).then(function(res) {
                    return res.data;
                });
            },
            CurrentUser: function (UserService) {
                return UserService.getUser();
            }
        }
    });

}