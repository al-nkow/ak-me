export default class InterviewControllerFunc {

    constructor(
        $scope,
        $stateParams,
        SkillsService,
        RouteService,
        Candidate,
        Info,
        Levels,
        Sublevels,
        ngToast,
        Users,
        CurrentUser) {

        this.ngToast = ngToast;
        this.RouteService = RouteService;
        this.SkillsService = SkillsService;
        this.$stateParams = $stateParams;
        this.currentUser = CurrentUser;
        this.collections = {
            yesNo: ['Yes', 'No'],
            levels: Levels,
            subLevels: Sublevels
        };
        this.candidate = Candidate;
        this.edit = false;
        this.card = Info || {};
        this.reserved = {};
        this.users = Users;

        $scope.$on('INTERVIEW_EDIT_MODE_CHANGED', (event, data) => {
            if (data) {
                this.reserved = angular.copy(this.card);
                if (this.card.level) this.card.level = this.card.level._id;
                if (this.card.subLevel) this.card.subLevel = this.card.subLevel._id;
                if (this.card.createdBy && CurrentUser.role === 'admin') this.card.createdBy = this.card.createdBy._id;
            } else {
                this.card = this.reserved;
            }
            this.edit = data;
        });
    }

    saveCard() {
        this.card.type = this.$stateParams.type;
        this.SkillsService.createSkills(this.$stateParams.type, this.$stateParams.id, this.card).then((res) => {
            if (res.status === 200) {
                this.ngToast.create('Card successfully saved', 'success');
                this.RouteService.reload();
            } else {
                this.ngToast.create('ERROR', 'alert');
            }
        }).catch((err) => { console.log('ERROR', err); });
    }

}