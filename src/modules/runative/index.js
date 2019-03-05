import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './runative.routes';
import RunativeController from './runative.controller';

import ScreenSize from '../../services/screen-size';

export default angular.module('hrBase.runative', [
  uirouter,
  ScreenSize
])
  .config(routing)
  .controller('RunativeController', RunativeController)
  .name;