import './create-resume.styles.less';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './create-resume.routes';
import CreateResumeController from './create-resume.controller';

import ToastService     from '../../services/toast-service';
import CandidateService from '../../services/candidate-service';

export default angular.module('hrBase.create-resume', [
    uirouter,
    ToastService,
    CandidateService
])
    .config(routing)
    .controller('CreateResumeController', CreateResumeController)
    .name;