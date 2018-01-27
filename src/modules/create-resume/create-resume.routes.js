export default function routes($stateProvider) {

    $stateProvider.state('app.create-resume', {
        url: '/create-resume',
        views: {
            'content@': {
                controller: 'CreateResumeController',
                controllerAs: 'vc',
                template: require('./create-resume.template.pug')
            }
        },
        resolve: {
            Skills: function (DictionaryService) {
                return DictionaryService.technologies().then(function (res) {
                    return res.data;
                });
            },
            Priorities: function (DictionaryService) {
                return DictionaryService.priorities().then(function (res) {
                    return res.data;
                });
            },
            EnglishLevels: function (DictionaryService) {
                return DictionaryService.englishLevels().then(function (res) {
                    return res.data;
                });
            },
            States: function (DictionaryService) {
                return DictionaryService.states().then(function (res) {
                    return res.data;
                });
            },
            Projects: function (DictionaryService) {
                return DictionaryService.projects().then(function(res) {
                    return res.data;
                });
            }
        }
    });

}