export default function routes($stateProvider) {




    // $stateProvider.state('app.login', {
    //     url: '/login?sample',
    //     views: {
    //         'content@': {
    //             controller: 'LoginController',
    //             controllerAs: 'lc',
    //             template: require('./login.template.pug'),
    //         }
    //     }
    // });




    $stateProvider.state('app.projects', {
        url: '/projects',
        views: {
            'content@': {
                controller: 'CompanyProjectsController',
                controllerAs: 'vc',
                template: require('./company-projects.template.pug')
            }
        },
        resolve: {
            Projects: function (ProjectService) {
                return ProjectService.getProjects().then(function (res) {
                    if (res.status === 200) {
                        return res.data;
                    } else { console.log('GET PROJECTS ERROR: ', res); }
                }).catch(function(err) { console.log('GET PROJECTS ERROR: ', err); });
            }
        }
    });

}