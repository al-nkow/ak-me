// import './hrportal.styles.styl';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './hrportal.routes';
import HRPortalController from './hrportal.controller';

import ScreenSize from '../../services/screen-size';

export default angular.module('hrBase.hrportal', [
    uirouter,
    ScreenSize
])
    .config(routing)
    .controller('HRPortalController', HRPortalController)
    .name;