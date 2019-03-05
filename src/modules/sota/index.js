import './sota.styles.styl';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './sota.routes';
import SotaController from './sota.controller';

import ScreenSize from '../../services/screen-size';

export default angular.module('hrBase.sota', [
    uirouter,
    ScreenSize
])
    .config(routing)
    .controller('SotaController', SotaController)
    .name;