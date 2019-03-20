import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './prokach.routes';
import ProkachController from './prokach.controller';

export default angular.module('hrBase.prokach', [
    uirouter,
])
    .config(routing)
    .controller('ProkachController', ProkachController)
    .name;