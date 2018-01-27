// import './reset-password.styles.less';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './reset-password.routes';
import ResetPasswordController from './reset-password.controller';

import ToastService from '../../services/toast-service';
import LoginService from '../../services/login-service';
import LetterConfirmResetPassword from '../../services/letter-confirm-reset-password';

export default angular.module('hrBase.reset-password', [
    uirouter,
    ToastService,
    LoginService,
    LetterConfirmResetPassword
])
    .config(routing)
    .controller('ResetPasswordController', ResetPasswordController)
    .name;