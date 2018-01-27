// import './import-resume.styles.less';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './import-resume.routes';
import ImportResumeController from './import-resume.controller';

import ToastService     from '../../services/toast-service';
import CandidateService from '../../services/candidate-service';
import UtilsService     from '../../services/utils-service';
import HhService        from '../../services/hh-service';
import UserService      from '../../services/user-service';

export default angular.module('hrBase.import-resume', [
    uirouter,
    ToastService,
    CandidateService,
    UtilsService,
    HhService,
    UserService
])
    .config(routing)
    .controller('ImportResumeController', ImportResumeController)
    .name;