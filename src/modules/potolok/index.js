import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './potolok.routes';
import PotolokController from './potolok.controller';

export default angular.module('hrBase.potolok', [
    uirouter,
])
    .config(routing)
    .controller('PotolokController', PotolokController)
    .name;