import './login.styles.less';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './login.routes';
import LoginController from './login.controller';

import LoginService from '../../services/login-service';
import ToastService from '../../services/toast-service';
import SampleService from '../../services/sample-service';
import RouteService from '../../services/route-service';
import LetterForgotPassword from '../../services/letter-forgot-password';

export default angular.module('hrBase.login', [
    uirouter,
    LoginService,
    ToastService,
    SampleService,
    RouteService,
    LetterForgotPassword
])
    .config(routing)
    .controller('LoginController', LoginController)
    .name;