class BkResumeComponentController {

    constructor($scope, ngToast, SampleService, $state, CandidateService) {
        this.CandidateService = CandidateService;
        this.$state = $state;
        this.SampleService = SampleService;
        this.ngToast = ngToast;
        this.$scope = $scope;
        this.skillTitles = [];
        this.selectedItem = null;
        this.searchText = null;
        this.currencyList = ['RUR', 'EUR', 'USD'];
        this.estimates = ['Yes', 'No'];

        $scope.$watch(() => { return this.skills }, () => {
            if (this.skills) this.skillTitles = this.skills.map((item) => { return item.title; });
        }, true);

        if (this.resume) {
            this.resume.full_name = `${this.resume.last_name} ${this.resume.first_name} ${this.resume.middle_name || ''}`;
        }

        $scope.calculateExp = (months) => {
            return `${Math.floor(months / 12)} years ${months % 12} months`;
            // return _.template('<%=y%> years <%=m%> months')({y: Math.floor(months / 12), m: months % 12});
        };
    }

    /**
     * Search for skills.
     */
    querySearch(query) {
        let result = null;
        if (query) {
            let lowerQuery = angular.lowercase(query);
            console.log('>>>>', lowerQuery);
            result = this.skillTitles.filter((skill) => {
                return skill.toLowerCase().indexOf(lowerQuery) !== -1;
            });
            console.log('>>>>', result);
        }
        return result || [];
    };










    editMode() {
        this.toggleViewMode();
    };

    /**
     * Upload resume photo
     * @param {object} file
     * @param {array} errFiles
     */
    uploadFile(file, errFiles) {
        this.file = file;
        if (errFiles && errFiles[0] && errFiles[0].$error == 'maxSize') {
            this.ngToast.create('The maximum allowed image size is 1MB', 'alert');
            return false;
        }

        this.CandidateService.updatePhoto(file, this.resume._id)
            .then((res) => {
                this.ngToast.create('File uploaded', 'success');
                this.resume.photo = res.data.photo;
                this.$state.reload();
            })
            .catch((err) => {
                this.ngToast.create('Upload file error', 'alert');
                this.file = null;
            });
    };

    invite() {
        this.$scope.$emit('RESUME_SEND_INVITATION', this.resume);
    };

    archive() {
        this.$scope.$emit('RESUME_ARCHIVE', this.resume);
    };

    update() {
        this.$scope.$emit('RESUME_SAVE', this.resume);
    };

    delete() {
        this.$scope.$emit('RESUME_DELETE', this.resume);
    };

    print() {
        this.$scope.$emit('RESUME_PRINT', this.resume);
    };

    addFiles() {
        this.$scope.$emit('ADD_FILES', this.resume);
    };

    saveFilters(ev) {
        this.SampleService.saveFilter({_id: this.resume._id}).then((res) => {
            if (res.status == 200) {
                this.openLinkSampleModal(ev, res.data);
            } else {
                console.log('DASHBOARD SAVE FILTERS ERROR: ', err);
            }
        }).catch((err) => {
            this.ngToast.create('ERROR', 'alert', 1000);
            console.log('DASHBOARD SAVE FILTERS ERROR: ', err);
        });
    };
}

export default {
    template: require('./resume.template.pug'),
    controller: BkResumeComponentController,
    controllerAs: 'vc',
    bindings: {
        resume: '=?', // resume {object}
        user: '=?', // current user
        priorities: '=?', // array
        states: '=?', // array
        imported: '=?', // if resume just imported from HH.ru and not saved
        englishLevels: '=?', // array
        skills: '=?',
        projects: '=?',
        edit: '=?',
        toggleViewMode: '&?'
    }
};


