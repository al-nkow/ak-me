import './interview-select.styles.less';

import angular from 'angular';

import component from './interview-select.component';

export default angular.module('components.interview-select', [])
    .component('interviewSelect', component)
    .name;