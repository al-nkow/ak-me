// import './hrportal.styles.styl';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './hrportal.routes';
import HRPortalController from './hrportal.controller';

export default angular.module('hrBase.hrportal', [
    uirouter,
])
    .config(routing)
    .controller('HRPortalController', HRPortalController)
    .name;