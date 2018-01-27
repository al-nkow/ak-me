export default class DashboardController {

    constructor($scope,
                Candidates,
                Priorities,
                States,
                Skills,
                Projects,
                Limit,
                $state,
                $stateParams,
                $window,
                CurrentUser,
                $rootScope,
                EnglishLevels,
                $mdDialog,
                CandidateService,
                ngToast) {

        this.CandidateService = CandidateService;

        this.$scope        = $scope;
        this.$state        = $state;
        this.$rootScope    = $rootScope;
        this.$mdDialog     = $mdDialog;
        this.ngToast       = ngToast;

        this.test = 1;

        this.archive       = $stateParams.archive === 'true';
        this.currentUser   = CurrentUser;

        this.limit         = Limit;
        this.total         = Candidates && Candidates.pagination ? Candidates.pagination.total : 0;

        this.sortData      = {};
        this.states        = States;
        this.priorities    = Priorities;
        this.skills        = Skills;
        this.englishLevels = EnglishLevels;
        this.projects      = Projects;
        this.fixTop        = false;
        this.resumeList    = Candidates && Candidates.data ? Candidates.data : [];

        let codeReg = /code=([^/#]*)/;
        let exec = codeReg.exec($window.location.search);
        if (exec && exec[1]) {
            $window.location.href = '/#/parse?code=' + exec[1];
        }

        this.sortData = {
            sortName: $stateParams.sortName,
            direction: $stateParams.direction
        };

        this.scrollControl();
        this.eventListeners();

    }

    eventListeners() {
        this.$scope.$on('CUSTOMER_INTERVIEW_CHANGED', (event, data) => {
            this.changeInterviewHandler('customerInterviewDate', 'customerInterviewEstimate', data);
        });

        this.$scope.$on('HR_INTERVIEW_CHANGED', (event, data) => {
            this.changeInterviewHandler('hrInterviewDate', 'hrInterviewEstimate', data);
        });

        this.$scope.$on('DEV_INTERVIEW_CHANGED', (event, data) => {
            this.changeInterviewHandler('devInterviewDate', 'devInterviewEstimate', data);
        });

        this.$scope.$on('CANDIDATE_STATE_CHANGED', (event, data) => {
            this.changeStateHandler('rejectionReason', 'state', data);
        });

        this.$scope.$on('CANDIDATE_PRIORITY_CHANGED', (event, data) => {
            this.changeSelectHandler('candidatePriority', data);
        });

        this.$scope.$on('CANDIDATE_PROJECT_CHANGED', (event, data) => {
            this.changeSelectHandler('project', data);
        });

        this.$scope.$on('CANDIDATE_LANG_CHANGED', (event, data) => {
            this.changeSelectHandler('englishLevel', data);
        });
    }

    goToArchive() {
        this.$state.go('app.dashboard', { archive: true }, {reload: false, inherit: false, notify: true});
    };

    goToDashboard() {
        this.$state.go('app.dashboard', { }, {reload: false, inherit: false, notify: true});
    };

    openMenu($mdMenu, ev) {
        $mdMenu.open(ev);
    };

    findResumeById(arr, id) {
        return arr.reduce((res, item) => { return item._id === id ? item : res; }, '');
    }

    changeInterviewHandler(dateName, estimateName, data) {
        let newData = {};
        newData[dateName] = data.new.date;
        newData[estimateName] = data.new.model;
        this.updateCandidate(data.id, newData, null, () => {
            let resume = this.findResumeById(this.resumeList, data.id);
            resume[dateName] = data.old.date;
            resume[estimateName] = data.old.model;
        });
    };

    changeStateHandler(reasonName, propName, data) {
        let newData = {};
        newData[reasonName] = data.new.reason;
        newData[propName] = data.new.model;
        this.updateCandidate(data.id, newData, null, () => {
            let resume = this.findResumeById(this.resumeList, data.id);
            resume[reasonName] = data.old.rejectionReason;
            resume[propName] = data.old.model;
        });
    };

    changeSelectHandler(propName, data) {
        let newData = {};
        newData[propName] = data.new;
        this.updateCandidate(data.id, newData, null, () => {
            let resume = this.findResumeById(this.resumeList, data.id);
            resume[propName] = data.old;
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

    tableSort(name) {
        this.sortData.offset = 0;
        this.sortData.sortName = name;
        this.sortData.direction = (this.sortData.direction === 'asc') ? 'desc' : 'asc';
        this.$state.go('app.dashboard', this.sortData);
    };

    updateCandidate(id, data, callback, callback2) {
        this.CandidateService.updateResume(id, data)
            .then(() => {
                this.ngToast.create('Resume successfully updated', 'success', 1000);
                if (callback) callback();
            }).catch((err) => {
            if (callback2) callback2();
            console.log('UPDATE RESUME ERROR: ', err);
            this.ngToast.create('Failed to update resume', 'alert', 1000);
        });
    };

    EditNotesModalController($mdDialog) {
        this.originalNotes = angular.copy(this.locals.notes);
        this.cancel = () => { $mdDialog.cancel(); };
        this.confirm = () => {
            if (this.originalNotes === this.locals.notes) $mdDialog.cancel();
            $mdDialog.hide(this.locals.notes);
        };
    }

    showEditNotesModal(ev, candidate) {
        this.$mdDialog.show({
            template: require('../../components/edit-note/edit-note.template.pug'),
            controller: this.EditNotesModalController,
            controllerAs: 'vc',
            parent: angular.element(document.body),
            targetEvent: ev,
            bindToController: true,
            clickOutsideToClose: true,
            locals: { notes: candidate.notes },
        }).then((notes) => {
            this.updateCandidate(candidate._id, { notes: notes }, () => {
                candidate.notes = notes;
            });
        }).catch((err) => { console.log(err); });
    };

}