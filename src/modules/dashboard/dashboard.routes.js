// routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {

    $stateProvider.state('app.dashboard', {
        url: '/?code?filters?offset?englishLevel?state?candidatePriority?skill_set?from?to?sortName?direction?createdAt?archive?preview?project',
        params: {
            skill_set: {
                array: true
            }
        },
        views: {
            'content@': {
                controller: 'DashboardController',
                controllerAs: 'dbc',
                template: require('./dashboard.template.pug'),
            }
        },
        resolve: {
            CurrentUser: (UserService) => {
                return UserService.getUser();
            },
            Limit: () => {
                return 10;
            },
            Candidates: ($stateParams, CandidateService, Limit, CurrentUser, UserService, $state, ngToast) => {
                if (!CurrentUser) return;
                let data = angular.copy($stateParams);

                if (data.offset) data.offset = +data.offset;
                delete data.code; // code - need for headhunter
                delete data.filters;
                data.limit = Limit;
                data.archive = data.archive === 'true';

                if (data.sortName) { // sorting
                    data.sort = {};
                    data.sort[data.sortName] = data.direction;
                    delete data.sortName;
                    delete data.direction;
                }

                if (CurrentUser.role === 'guest') {

                    let guest = UserService.getGuest();
                    let token = guest ? guest.token : '';

                    return CandidateService.searchForGuest(data, token).then((res) => {
                        return res ? res.data : [];
                    }).catch((err) => {
                        console.log('GET CANDIDATES ERROR: ', err);
                        if (err && err.status === 401) {
                            let msg = err.data && err.data.message ? err.data.message : 'Unauthorized';
                            ngToast.create(msg, 'alert', 3000);
                            $state.go('app.login');
                        }
                    });
                } else {
                    return CandidateService.search(data).then((res) => {
                        return res ? res.data : [];
                    }).catch((err) => { console.log('ERROR: ', err); });
                }
            },
            States: (DictionaryService) => {
                return DictionaryService.states().then(function (res) {
                    return res.data;
                }).catch((err) => { console.log('GET STATES ERROR: ', err); });
            },
            EnglishLevels: (DictionaryService) => {
                return DictionaryService.englishLevels().then(function (res) {
                    return res.data;
                }).catch((err) => { console.log('GET ENGLISH LEVELS ERROR: ', err); });
            },
            Priorities: (DictionaryService) => {
                return DictionaryService.priorities().then(function (res) {
                    return res.data;
                }).catch((err) => { console.log('GET PRIORITIES ERROR: ', err); });
            },
            Skills: (DictionaryService) => {
                return DictionaryService.technologies().then(function (res) {
                    return res.data;
                }).catch((err) => { console.log('GET SKILLS ERROR: ', err); });
            },
            Projects: (DictionaryService, CurrentUser) => {
                if (!CurrentUser) return;
                if (['admin', 'hr', 'lead'].indexOf(CurrentUser.role) === -1) return [];
                return DictionaryService.projects().then(function (res) {
                    return res.data;
                }).catch((err) => { console.log('GET PROJECTS ERROR: ', err); });
            },
        }, // eof resolve
    });

}