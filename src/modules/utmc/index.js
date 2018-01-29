// import './utmc.styles.styl';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './utmc.routes';
import UtmcController from './utmc.controller';

export default angular.module('hrBase.utmc', [
    uirouter,
])
    .config(routing)
    .controller('UtmcController', UtmcController)
    .name;