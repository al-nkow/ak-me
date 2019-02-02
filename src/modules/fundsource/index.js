// import './hrportal.styles.styl';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './fundsource.routes';
import FundSourceController from './fundsource.controller';

export default angular.module('hrBase.fundsource', [
  uirouter,
])
  .config(routing)
  .controller('FundSourceController', FundSourceController)
  .name;