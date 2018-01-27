import './int-tabs.styles.less';

import angular from 'angular';

import component from './int-tabs.component';

export default angular.module('components.int-tabs', [])
    .component('devTabs', component)
    .name;