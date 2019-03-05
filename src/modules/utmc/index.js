import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './utmc.routes';
import UtmcController from './utmc.controller';

import ScreenSize from '../../services/screen-size';

export default angular.module('hrBase.utmc', [
    uirouter,
    ScreenSize
])
    .config(routing)
    .controller('UtmcController', UtmcController)
    .name;