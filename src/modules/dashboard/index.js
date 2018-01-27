import './dashboard.styles.less';

import angular  from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './dashboard.routes';
import DashboardController from './dashboard.controller';

import UtilsService      from '../../services/utils-service';
import LoginService      from '../../services/login-service';
import ToastService      from '../../services/toast-service';
import DictionaryService from '../../services/dictionary-service';

export default angular.module('hrBase.dashboard', [
    uirouter,
    UtilsService,
    LoginService,
    ToastService,
    DictionaryService
])
    .config(routing)
    .controller('DashboardController', DashboardController)
    .name;