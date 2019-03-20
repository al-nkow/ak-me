import './about.styles.styl';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './about.routes';
import AboutController from './about.controller';

export default angular.module('hrBase.about', [
    uirouter,
])
    .config(routing)
    .controller('AboutController', AboutController)
    .name;