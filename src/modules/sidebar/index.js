import './sidebar.styles.less';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

// import routing from './contact.routes';
import SidebarController from './sidebar.controller';
import UserService from '../../services/user-service';

export default angular.module('hrBase.sidebar', [uirouter, UserService])
    // .config(routing)
    .controller('SidebarController', SidebarController)
    .name;