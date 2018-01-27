export default class CreateResumeController {

    constructor(Projects, Skills, ngToast, Priorities, EnglishLevels, States, CandidateService, $state) {
        this.$state = $state;
        this.CandidateService = CandidateService;
        this.states = States;
        this.englishLevels = EnglishLevels;
        this.priorities = Priorities;
        this.ngToast = ngToast;
        this.currencyList = ['RUR', 'EUR', 'USD'];
        this.estimates = ['Yes', 'No'];
        this.genders = [{id: 'male', name: 'Male'}, {id: 'female', name: 'Female'}];
        this.projects = Projects;
        this.skills = Skills;
        this.files = null;
        this.resume = {
            parsed_contact: {},
            salary: {},
            site: {
                others: []
            }
        };
    }

    attach(id) {
        if (this.invalidFiles.length) {
            this.invalidFiles[0].$error = 'pattern'
                ? this.ngToast.create('UPLOAD FILES ERROR - supported file types: ' + this.invalidFiles[0].$errorParam, 'alert')
                : this.ngToast.create('UPLOAD FILES ERROR', 'alert');
            this.$state.go('app.card.resume', {id});
            return false;
        }
        this.CandidateService.attachFiles(this.files, id).then((res) => {
            if (!res || (res && res.status !== 200)) {
                this.ngToast.create('UPLOAD FILES ERROR', 'alert');
                console.log('UPLOAD FILES ERROR', res);
                return false;
            }
            this.ngToast.create('File uploaded', 'success');
            this.$state.go('app.card.resume', {id});
        }).catch((err) => {
            this.ngToast.create('UPLOAD FILES ERROR', 'alert');
            console.log('UPLOAD FILES ERROR: ', err);
            self.file = null;
        });
    }

    save() {
        // if (this.resume.birth_date) this.resume.age = this.calcAge(this.resume.birth_date);

        if (!this.resume.skill_set) delete this.resume.skill_set;
        this.CandidateService.createResume(this.resume).then((res) => {
            if (res && res.status === 200) {
                this.ngToast.create('Resume successfully saved', 'success');
                if (this.files && this.files.length || this.invalidFiles && this.invalidFiles.length) {
                    this.attach(res.data);
                } else {
                    this.$state.go('app.card.resume', {id: res.data});
                }
            } else {
                console.log('SAVE RESUME ERROR: ', res);
            }
        }).catch((err) => {
            this.ngToast.create('ERROR', 'alert');
            console.log('SAVE RESUME ERROR: ', err);
        });
    }

    // calcAge (bday) {
    //     let today = new Date();
    //     let birthDate = new Date(bday);
    //     let age = today.getFullYear() - birthDate.getFullYear();
    //     let m = today.getMonth() - birthDate.getMonth();
    //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    //     return age;
    // }

    addFile(files, invalidFiles) {
        this.files = files;
        this.invalidFiles = invalidFiles;
    }

}


