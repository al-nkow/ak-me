// import './fitness.styles.styl';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './fitness.routes';
import FitnessController from './fitness.controller';

export default angular.module('hrBase.fitness', [
    uirouter,
])
  .config(routing)
  .controller('FitnessController', FitnessController)
  .name;