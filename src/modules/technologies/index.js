import './technologies.styles.less';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './technologies.routes';
import TechnologiesController from './technologies.controller';

import DictionaryService from '../../services/dictionary-service';
import ToastService      from '../../services/toast-service';

export default angular.module('hrBase.technologies', [
    uirouter,
    DictionaryService,
    ToastService
])
    .config(routing)
    .controller('TechnologiesController', TechnologiesController)
    .name;