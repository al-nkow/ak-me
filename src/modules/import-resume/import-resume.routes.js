export default function routes($stateProvider) {

    $stateProvider.state('app.parse', {
        url: '/parse?code&resume',
        views: {
            'content@': {
                controller: 'ImportResumeController',
                controllerAs: 'rpc',
                template: require('./import-resume.template.pug')
            }
        },
        resolve: {
            HhConfig: function (HhService) {
                return HhService.getConfig().then(function (res) {
                    return res;
                });
            },
            States: function (DictionaryService) {
                return DictionaryService.states().then(function (res) {
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
            Skills: function (DictionaryService) {
                return DictionaryService.technologies().then(function (res) {
                    return res.data;
                });
            },
            Projects: function (DictionaryService) {
                return DictionaryService.projects().then(function (res) {
                    return res.data;
                });
            }
        }
    });

}