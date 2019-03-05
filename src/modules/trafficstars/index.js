import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './trafficstars.routes';
import TrafficstarsController from './trafficstars.controller';

import ScreenSize from '../../services/screen-size';

export default angular.module('hrBase.trafficstars', [
  uirouter,
  ScreenSize
])
  .config(routing)
  .controller('TrafficstarsController', TrafficstarsController)
  .name;