import './project-select.styles.less';

import angular from 'angular';

import component from './project-select.component';

export default angular.module('components.project-select', [])
    .component('projectSelect', component)
    .name;