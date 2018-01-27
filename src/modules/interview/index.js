import './interview.styles.less';

import angular  from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './interview.routes';
import InterviewController from './interview.controller';

import ToastService  from '../../services/toast-service';
import RouteService  from '../../services/route-service';
import SkillsService from '../../services/skills-service';

export default angular.module('hrBase.interview', [
    uirouter,
    ToastService,
    RouteService,
    SkillsService
])
    .config(routing)
    .controller('InterviewController', InterviewController)
    .name;