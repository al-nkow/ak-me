import './set-password.styles.less';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './set-password.routes';
import SetPasswordController from './set-password.controller';

import ToastService from '../../services/toast-service';
import LoginService from '../../services/login-service';

export default angular.module('hrBase.set-password', [
    uirouter,
    ToastService,
    LoginService
])
    .config(routing)
    .controller('SetPasswordController', SetPasswordController)
    .name;