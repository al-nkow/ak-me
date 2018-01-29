import './portfolio.styles.styl';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './portfolio.routes';
import PortfolioController from './portfolio.controller';

export default angular.module('hrBase.portfolio', [
    uirouter,
])
    .config(routing)
    .controller('PortfolioController', PortfolioController)
    .name;