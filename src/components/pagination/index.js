import './pagination.styles.less';

import angular from 'angular';

import component from './pagination.component';

export default angular.module('components.pagination', [])
    .component('pagination', component)
    .name;