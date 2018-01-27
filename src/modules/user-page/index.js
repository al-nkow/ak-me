import './user-page.styles.less';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './user-page.routes';
import UserPageController from './user-page.controller';

import UserService from '../../services/user-service';
import ToastService from '../../services/toast-service';

export default angular.module('hrBase.userPage', [
    uirouter,
    UserService,
    ToastService
])
    .config(routing)
    .controller('UserPageController', UserPageController)
    .name;