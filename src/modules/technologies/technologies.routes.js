export default function routes($stateProvider) {

    $stateProvider.state('app.technologies', {
        url: '/technologies',
        views: {
            'content@': {
                controller: 'TechnologiesController',
                controllerAs: 'vc',
                template: require('./technologies.template.pug'),
            }
        },
        resolve: {
            Skills: function (DictionaryService) {
                return DictionaryService.technologies().then(function (res) {
                    return res.data;
                });
            }
        }
    });

}