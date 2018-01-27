import './priority-select.styles.less';

import angular from 'angular';

import component from './priority-select.component';

export default angular.module('components.priority-select', [])
    .component('prioritySelect', component)
    .name;