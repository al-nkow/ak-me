export default function routes($stateProvider) {

    $stateProvider.state('app.card.resume.interview', {
        url: '/interview?type',
        views: {
            'content@': {
                controller: 'InterviewController',
                controllerAs: 'vc',
                template: function($stateParams) {
                    switch ($stateParams.type) {
                        case 'hr' :
                            return require('./templates/hr.template.pug');
                            break;
                        case 'expert' :
                            return require('./templates/expert.template.pug');
                            break;
                        case 'common' :
                            return require('./templates/common.template.pug');
                            break;
                        case 'devops' :
                            return require('./templates/devops.template.pug');
                            break;
                        case 'qa' :
                            return require('./templates/qa.template.pug');
                            break;
                        case 'automation' :
                            return require('./templates/automation.template.pug');
                            break;
                        case 'storage':
                            return require('./templates/storage.template.pug');
                            break;
                        case 'data':
                            return require('./templates/data.template.pug');
                            break;
                        case 'java':
                            return require('./templates/java.template.pug');
                            break;
                        case 'web':
                            return require('./templates/web.template.pug');
                            break;
                        case 'python':
                            return require('./templates/python.template.pug');
                            break;
                        case 'android':
                            return require('./templates/android.template.pug');
                            break;
                        case 'ios':
                            return require('./templates/ios.template.pug');
                            break;
                        case 'pmux':
                            return require('./templates/pmux.template.pug');
                            break;
                        case 'cplus':
                            return require('./templates/cplus.template.pug');
                            break;
                    }
                },
            }
        },
        resolve: {
            CurrentUser: (UserService) => {
                return UserService.getUser();
            },
            Candidate: (CandidateService, $stateParams) => {
                return CandidateService.getCandidateInfoById($stateParams.id).then((res) => {
                    if (res.status == 200) return res.data[0];
                }).catch((err) => {
                    console.log('ERROR getCandidateInfoById: ', err);
                });
            },
            Info: (SkillsService, $stateParams) => {
                return SkillsService.getSkillsByResumeId($stateParams.type, $stateParams.id).then((res) => {
                    if (res.status == 200) return res.data[0];
                }).catch((err) => {
                    console.log('ERROR getSkillsByResumeId: ', err);
                });
            },
            Levels: function(DictionaryService) {
                return DictionaryService.levels().then(function (res) {
                    if (res.status == 200) return res.data;
                }).catch(function(err) {
                    console.log('ERROR getLevels: ', err);
                });
            },
            Sublevels: function(DictionaryService) {
                return DictionaryService.subLevels().then(function (res) {
                    if (res.status == 200) return res.data;
                }).catch(function(err) {
                    console.log('ERROR getSubLevels: ', err);
                });
            },
            Users: function (UserService, CurrentUser) {
                if (CurrentUser.role != 'admin') return false;
                return UserService.all().then(function (response) {
                    return response.data;
                }).catch(function(err) {
                    console.log('ERROR: ', err);
                    return false;
                });
            }
        }
    })

}