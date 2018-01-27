//  https://hh.ru/oauth/authorize?response_type=code&client_id=RD4SV5647FVKCBB89AREQAR8OC87SSP5TA1FV4FOGG23RM3MK501Q0H5GQG55TB7&
// redirect_uri=http://localhost:3000"

import FoundUserModalController from '../../components/found-user-modal/found-user-modal.controller';
export default class ImportResumeController {

    constructor(ngToast,
                $mdDialog,
                $scope,
                CandidateService,
                UtilsService,
                HhService,
                $stateParams,
                $state,
                HhConfig,
                UserService,
                States,
                Priorities,
                EnglishLevels,
                Skills,
                Projects,
                ) {

        this.$scope = $scope;
        this.ngToast = ngToast;
        this.$mdDialog = $mdDialog;
        this.CandidateService = CandidateService;
        this.UtilsService = UtilsService;
        this.HhService = HhService;
        this.$stateParams = $stateParams;
        this.$state = $state;
        this.skills = Skills;
        this.currentUser = UserService.getUser();
        this.states = States;
        this.priorities = Priorities;
        this.englishLevels = EnglishLevels;
        this.projects = Projects;
        this.parse = {};
        this.hh = {
            hhOauthUrl: '',
            needToken: false
        };

        $scope.$on('RESUME_SAVE', (event, data) => {
            this.saveResume(data);
        });

        this.HhService.hasToken().then((response) => {
            this.UtilsService.checkResponse(response, (res) => {
                if (!this.$stateParams.code && res.data.needToken) {
                    this.hh.hhOauthUrl = HhConfig.hhOauthUrl;
                    this.hh.needToken = true;
                } else if (this.$stateParams.code && res.data.needToken) {

                    this.HhService.setToken(this.$stateParams.code).then((tokenResponse) => {
                        this.UtilsService.checkResponse(tokenResponse, (tokenRes) => {
                            console.log('SetToken Success');
                            this.reloadPageWithoutCode();
                        }, (err) => {
                            console.log('SetToken Error:', err);
                        });
                    }).catch((err) => {
                        console.log('SetToken Error:', err);
                        this.reloadPageWithoutCode();
                    });

                } else if (this.$stateParams.code && !res.data.needToken) {
                    this.reloadPageWithoutCode();
                } else if (this.$stateParams.code) {
                    this.reloadPageWithoutCode();
                }

            });
        }).catch((err) => { console.log('[HhService.hasToken] error: ', err); });

        this.scrollControl();

    }

    reloadPageWithoutCode() {
        this.$state.go('app.candidate.parse', {code: ''});
    }

    parseUrl() {
        let regexp = /resume\/([^/#?]*)/;
        let executed = regexp.exec(this.parse.hhUrl);
        if (executed && executed[1]) this.parse.hhUserId = executed[1];
    };

    getResume() {
        let id = this.parse.hhUserId;
        this.HhService.getHhResume(id).then((response) => {
            this.UtilsService.checkResponse(response, (res) => {
                console.log('RESULT: ', res);
                this.resume = res.data;
            });
        });
    };

    scrollControl() {
        let element = document.getElementById('content-scroll');
        if (!element) return;
        element.onscroll = () => {
            if (((element.scrollTop === 0) && !this.fixTop) || ((element.scrollTop !== 0) && this.fixTop)) return false;
            this.fixTop = element.scrollTop !== 0;
            this.$scope.$apply();
        };
    };

    /**
     * press save resume button
     */
    saveResume(resume) {
        let data = {
            hh_id: resume.id
        };
        this.CandidateService.search(data)
            .then((res) => {
                if (res && res.data && res.data.data && res.data.data.length) {
                    this.showFoundUserDialog(res.data.data[0]);
                } else {
                    this.CandidateService.createResume(resume).then((response) => {
                        this.UtilsService.checkResponse(response, (res) => {
                            this.ngToast.create('Resume successfully saved', 'success');
                            this.$state.go('app.card.resume', {id: res.data});
                        }, (err) => {
                            console.log('Resume save error:', err);
                        });
                    });
                }
            })
            .catch((err) => {
                console.log('Search resume by hh_id error: ', err);
            });
    };

    /**
     * If you try to save an existing candidate
     * @param {object} resume - from database (have _id)
     */
    showFoundUserDialog(resume) {
        this.$mdDialog.show({
            controller: FoundUserModalController,
            controllerAs: 'vc',
            template: require('../../components/found-user-modal/found-user-modal.template.html'),
            parent: angular.element(document.body),
            // targetEvent: ev,
            clickOutsideToClose: true,
            locals: {resume: resume}
        }).then((id) => { // _id (base)
            // if update - pass resume from hh
            this.CandidateService.updateResume(id, this.resume)
                .then((res) => {
                    this.ngToast.create('Resume successfully updated', 'success');
                    if (res.status === 200) {
                        this.$state.go('app.card.resume', {id: id});
                    } else {
                        this.ngToast.create('Error', 'alert');
                        console.log(res);
                    }
                }).catch((err) => { console.log('ERROR: ', err); });

        });
    };
}


