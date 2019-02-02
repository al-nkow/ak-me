import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './gali.routes';
import GaliController from './gali.controller';

export default angular.module('hrBase.gali', [
  uirouter,
])
  .config(routing)
  .controller('GaliController', GaliController)
  .name;