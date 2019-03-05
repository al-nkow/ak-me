import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './zypmedia.routes';
import ZypmediaController from './zypmedia.controller';

import ScreenSize from '../../services/screen-size';

export default angular.module('hrBase.zypmedia', [
  uirouter,
  ScreenSize
])
  .config(routing)
  .controller('ZypmediaController', ZypmediaController)
  .name;