export default function routes($stateProvider) {

    $stateProvider.state('app.card', {
        url: '',
        abstract: true
    }).state('app.card.resume', {
        url: '/card/:id',
        views: {
            'content@': {
                controller: 'CardController',
                controllerAs: 'vc',
                template: require('./card.template.pug')
            }
        },
        resolve: {
            CurrentUser: function (UserService) {
                return UserService.getUser();
            },
            Resume: function ($stateParams, CandidateService) {
                if (!$stateParams.id) return {};
                return CandidateService.getResumeById($stateParams.id).then(function (res) {
                    return res.data[0];
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
            Templates: function (EmailTemplateService) {
                return EmailTemplateService.getList().then(function (res) {
                    if (res.status == 200) {
                        return res.data;
                    } else {
                        console.log('GET EMAIL TEMPLATES ERROR: ', res);
                    }
                }).catch(function (err) {
                    console.log('GET EMAIL TEMPLATES ERROR: ', err);
                });
            },
            Skills: function (DictionaryService) {
                return DictionaryService.technologies().then((res) => {
                    return res.data;
                }).catch((err) => { console.log('ERROR: ', err); });
            },
            Projects: function (DictionaryService, CurrentUser) {
                if (['admin', 'hr', 'lead'].indexOf(CurrentUser.role) === -1) return [];
                return DictionaryService.projects().then(function (res) {
                    return res.data;
                });
            }
        }
    });


}