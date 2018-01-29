import './home.styles.styl';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './home.routes';
import HomeController from './home.controller';

export default angular.module('hrBase.home', [
    uirouter
])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;