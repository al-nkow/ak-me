import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './fundsource.routes';
import FundSourceController from './fundsource.controller';

import ScreenSize from '../../services/screen-size';

export default angular.module('hrBase.fundsource', [
  uirouter,
  ScreenSize
])
  .config(routing)
  .controller('FundSourceController', FundSourceController)
  .name;