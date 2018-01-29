import './menu.styles.styl';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

// import routing from './menu.routes';
import MenuController from './menu.controller';

export default angular.module('hrBase.menu', [
    uirouter,
])
    // .config(routing)
    .controller('MenuController', MenuController)
    .name;