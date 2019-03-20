import './menu.styles.styl';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import MenuController from './menu.controller';

export default angular.module('hrBase.menu', [
    uirouter,
])
    .controller('MenuController', MenuController)
    .name;