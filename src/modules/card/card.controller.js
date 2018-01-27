import InvitationModalController from '../../components/invitation-modal/invitation-modal.controller';
import AddFilesModalController   from '../../components/add-files-modal/add-files-modal.controller';

export default class CardController {

    constructor($state,
                $scope,
                $stateParams,
                $mdDialog,
                Resume,
                UserService,
                States,
                Priorities,
                CandidateService,
                ngToast,
                CallPrint,
                Templates,
                EmailTemplateService,
                LetterInterviewInvitation,
                EnglishLevels,
                Skills,
                Projects) {

        this.$scope = $scope;
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.$mdDialog = $mdDialog;
        this.resume = Resume;
        this.CandidateService = CandidateService;
        this.ngToast = ngToast;
        this.CallPrint = CallPrint;
        this.Templates = Templates;
        this.EmailTemplateService = EmailTemplateService;
        this.LetterInterviewInvitation = LetterInterviewInvitation;
        this.fixTop = false;
        this.reserve = {};
        this.isEditing = false;
        this.currentUser = UserService.getUser();
        this.priorities = Priorities;
        this.states = States;
        this.englishLevels = EnglishLevels;
        this.skills = Skills;
        this.projects = Projects;

        console.log('resume, ', this.currentUser);

        this.hrOptions = {
            candidatePriority: this.resume.candidatePriority,
            state: this.resume.state,
            rejectionReason: this.resume.rejectionReason,
            project: this.resume.project,
            englishLevel: this.resume.englishLevel,
            hrInterviewEstimate: this.resume.hrInterviewEstimate,
            hrInterviewDate: this.resume.hrInterviewDate,
            customerInterviewEstimate: this.resume.customerInterviewEstimate,
            customerInterviewDate: this.resume.customerInterviewDate,
            devInterviewEstimate: this.resume.devInterviewEstimate,
            devInterviewDate: this.resume.devInterviewDate,
            notes: this.resume.notes,
        };

        if (this.currentUser && this.currentUser.role === 'guest') {
            this.resume.stateName = this.findByIndex(this.states, this.resume.state);
            this.resume.priorityName = this.findByIndex(this.priorities, this.resume.candidatePriority);
            this.resume.englishLevelName = this.findByIndex(this.englishLevels, this.resume.englishLevel);
        }

        $scope.$watch(() => {
            return this.hrOptions
        }, (newVal, oldVal) => {
            if (JSON.stringify(newVal) === JSON.stringify(oldVal)) return;
            this.update(newVal, oldVal);
        }, true);

        $scope.$on('RESUME_SEND_INVITATION', (event, data) => {
            this.showInviteModal(data);
        });

        $scope.$on('RESUME_ARCHIVE', (event, data) => {

        });

        $scope.$on('RESUME_SAVE', (event, data) => {
            this.update(data);
        });

        $scope.$on('RESUME_DELETE', (event, data) => {
            this.delete(data);
        });

        $scope.$on('RESUME_PRINT', () => {
            let str = document.getElementById('print-resume').innerHTML;
            this.CallPrint.print(str);
        });

        $scope.$on('ADD_FILES', (event, data) => {
            this.showAddFilesModal(data);
        });

        this.scrollControl();
    }

    toggleViewMode() {
        this.isEditing = !this.isEditing;

        if (this.isEditing) {
            this.reserve = angular.copy(this.resume);
        } else {
            this.resume = this.reserve;
        }
    }

    /**
     * Opens a dialog showing the generated link
     * @param ev - angular $event
     * @param {string} token
     */
    // openLinkSampleModal(ev, token) {
    //     this.$mdDialog.show({
    //         controller: 'CreateLinkModalCtrl as vc',
    //         templateUrl: '/templates/dashboard/components/create-link-modal/create-link.template.html',
    //         parent: angular.element(document.body),
    //         targetEvent: ev,
    //         clickOutsideToClose: true,
    //         locals: {token: token, id: this.resume._id}
    //     });
    // }

    findByIndex(arr, ind) {
        return arr.reduce((res, item) => {
            return item.priority === ind ? item.title : res;
        }, '')
    }

    scrollControl() {
        let element = document.getElementById('content-scroll');
        element.onscroll = () => {
            if (((element.scrollTop === 0) && !this.fixTop) || ((element.scrollTop !== 0) && this.fixTop)) return false;
            this.fixTop = element.scrollTop !== 0;
            this.$scope.$apply();
        };
    }

    showEditNotesModal($event) {
        this.$mdDialog.show({
            template: require('../../components/edit-note/edit-note.template.pug'),
            controller: this.EditNotesModalController,
            controllerAs: 'vc',
            parent: angular.element(document.body),
            targetEvent: $event,
            bindToController: true,
            clickOutsideToClose: true,
            locals: {notes: this.hrOptions.notes},
        }).then((notes) => {
            if (notes === this.hrOptions.notes) return;
            this.hrOptions.notes = notes;
        });
    }

    EditNotesModalController($mdDialog) {
        this.cancel = () => { $mdDialog.cancel(); };
        this.confirm = () => { $mdDialog.hide(this.locals.notes); };
    }

    /**
     * Call upload files modal
     * @param ev - $event
     */
    showAddFilesModal(ev) {
        this.$mdDialog.show({
            controller: AddFilesModalController,
            controllerAs: 'vc',
            template: require('../../components/add-files-modal/add-files-modal.template.pug'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        }).then((files) => {
            this.uploadFiles(files);
        }).catch((invalidFiles) => {
            if (!invalidFiles) return;
            invalidFiles[0].$error = 'pattern'
                ? this.ngToast.create('UPLOAD FILES ERROR - supported file types: ' + invalidFiles[0].$errorParam, 'alert')
                : this.ngToast.create('UPLOAD FILES ERROR', 'alert');
        });
    }

    /**
     * Upload files
     * @param {array} files
     */
    uploadFiles(files) {
        this.CandidateService.attachFiles(files, this.$stateParams.id).then((res) => {
            if (!res || (res && res.status !== 200)) {
                this.ngToast.create('UPLOAD FILES ERROR', 'alert');
                console.log('UPLOAD FILES ERROR', res);
                return false;
            }
            this.ngToast.create('Files uploaded', 'success');
            this.$state.reload();
        }).catch((err) => {
            this.ngToast.create('UPLOAD FILES ERROR', 'alert');
            console.log('UPLOAD FILES ERROR: ', err);
        });
    }

    toggleArchivedProp() {
        this.resume.archive = !this.resume.archive;
        this.update();
    }

    deleteAttachedFile(item) {
        let confirm = this.$mdDialog.confirm()
            .title('Сonfirm the action')
            .textContent('Are you sure you want to delete the file "' + item.name + '" ?')
            .ariaLabel('Delete item')
            .ok('Delete')
            .cancel('Cancel');
        this.$mdDialog.show(confirm).then(() => {
            this.CandidateService.deleteAttachedFile(item.link).then((res) => {
                if (res && res.status === 200) {
                    this.$mdDialog.cancel();
                    let attachments = this.resume.attachments.reduce((result, file) => {
                        if (file.link !== res.config.url) result.push(file);
                        return result;
                    }, []);
                    this.update({attachments: attachments}, null, () => {
                        this.resume.attachments = attachments;
                    });
                } else {
                    this.ngToast.create('Error', 'alert');
                    console.log('DELETE ATTACHED FILE ERROR: ', res);
                }
            }).catch((err) => {
                this.ngToast.create('Error', 'alert');
                console.log('DELETE FILE ERROR: ', err);
            });
        });
    }

    /**
     * Call invitation modal
     */
    showInviteModal() {
        this.$mdDialog.show({
            controller: InvitationModalController,
            controllerAs: 'vc',
            template: require('../../components/invitation-modal/invitation-modal.template.pug'),
            parent: angular.element(document.body),
            // targetEvent: ev,
            clickOutsideToClose: true,
            locals: {resume: this.resume, templates: this.Templates, user: this.currentUser}
        }).then((data) => {
            this.formatLetter(data);
        }).catch(() => {});
    }

    /**
     * Creates an html letter and leads it to the required format
     * @param {object} data - unformatted letter
     */
    formatLetter(data) {
        let letter = {};
        letter.html = this.LetterInterviewInvitation.create(data.body);
        letter.subject = data.subject;
        letter.replyTo = data.replyTo;
        letter.cc = data.cc;
        letter.to = data.to;
        this.sendEmail(letter);
    }

    /**
     * Send email
     * @param {object} data
     * @param {string} data.to
     * @param {string} data.subject
     * @param {string} data.html - body of message
     */
    sendEmail(data) {
        this.EmailTemplateService.send(data).then((res) => {
            if (res.status == 200) {
                this.ngToast.create('Mail successfully sent', 'success');
            } else {
                this.ngToast.create('ERROR', 'alert');
                console.log('SEND MAIL RES: ', res);
            }
        }).catch((err) => {
            this.ngToast.create('ERROR', 'alert');
            console.log('SEND MAIL ERROR: ', err);
        });
    }

    /**
     * Update resume
     */
    update(data, old, callback) {
        if ((!data && !this.resume) || !this.$stateParams.id) return;
        this.CandidateService.updateResume(this.$stateParams.id, (data || this.resume))
            .then((res) => {
                this.ngToast.create('Resume successfully updated', 'success');
                if (!data) this.$state.reload();
                if (callback) {
                    callback();
                }
            }).catch((err) => {
            console.log('SAVE RESUME ERROR: ', err);
            if (data && old) this.hrOptions = old;
        });
    }

    /**
     * Сall confirmation dialog to delete resume
     */
    delete() {
        let confirm = this.$mdDialog.confirm()
            .title('Сonfirm the action')
            .textContent('Are you sure you want to delete the resume "' + this.resume.full_name + '" ?')
            .ariaLabel('Delete item')
            .ok('Delete')
            .cancel('Cancel');

        this.$mdDialog.show(confirm).then(() => {
            this.CandidateService.deleteResume(this.$stateParams.id)
                .then((res) => {
                    if (res && res.status == 200) {
                        this.ngToast.create('Resume successfully deleted', 'success');
                        this.$state.go('app.dashboard');
                    } else {
                        this.ngToast.create('Error', 'alert');
                        console.log('DELETE RESUME ERROR: ', res);
                    }
                }).catch((err) => { console.log('ERROR: ', err); });
        });
    }

    /**
     * Print resume
     */
    printResume() {
        let str = document.getElementById('print-resume').innerHTML;
        this.CallPrint.print(str);
    }

}


