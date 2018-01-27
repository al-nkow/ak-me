export default function routes($stateProvider) {

    $stateProvider.state('app.users', {
        abstract: true,
        url: '/users'
    }).state('app.users.list', {
        url: '',
        views: {
            'content@': {
                controller: 'UsersController',
                controllerAs: 'uc',
                template: require('./users.template.pug')
            }
        },
        resolve: {
            CurrentUser: (UserService) => {
                return UserService.getUser();
            },
            Projects: function (ProjectService) {
                return ProjectService.getProjects().then(function (res) {
                    if (res.status === 200) {
                        return res.data;
                    } else { console.log('GET PROJECTS ERROR: ', res); }
                }).catch(function(err) { console.log('GET PROJECTS ERROR: ', err); });
            },
            Users: function (UserService) {
                return UserService.all().then(function (response) {
                    return response.data;
                });
            },
            Roles: function (DictionaryService) {
                return DictionaryService.roles().then(function (res) {
                    if (res.status == 200) return res.data;
                    console.log('get roles error: ', res);
                });
            }
        }
    });

}