import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './zypmedia.routes';
import ZypmediaController from './zypmedia.controller';

export default angular.module('hrBase.zypmedia', [
  uirouter,
])
  .config(routing)
  .controller('ZypmediaController', ZypmediaController)
  .name;