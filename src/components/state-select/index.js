import './state-select.styles.less';

import angular from 'angular';

import component from './state-select.component';

export default angular.module('components.state-select', [])
    .component('stateSelect', component)
    .name;