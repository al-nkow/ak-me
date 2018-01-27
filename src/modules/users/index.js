// import './users.styles.less';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './users.routes';
import UsersController from './users.controller';

import UserService from '../../services/user-service';
import LoginService from '../../services/login-service';
import LetterUserInvitation from '../../services/letter-user-invitation';

export default angular.module('hrBase.users', [
    uirouter,
    UserService,
    LoginService,
    LetterUserInvitation
])
    .config(routing)
    .controller('UsersController', UsersController)
    .name;