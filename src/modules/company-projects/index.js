// import './login.styles.less';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './company-projects.routes';
import CompanyProjectsController from './company-projects.controller';

import ToastService from '../../services/toast-service';
import ProjectService from '../../services/project-service';

export default angular.module('hrBase.projects', [
    uirouter,
    ToastService,
    ProjectService
])
    .config(routing)
    .controller('CompanyProjectsController', CompanyProjectsController)
    .name;

