import './sota.styles.styl';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './sota.routes';
import SotaController from './sota.controller';

export default angular.module('hrBase.sota', [
    uirouter,
])
    .config(routing)
    .controller('SotaController', SotaController)
    .name;