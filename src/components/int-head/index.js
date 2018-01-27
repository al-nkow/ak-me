import './int-head.styles.less';

import angular from 'angular';

import component from './int-head.component';

export default angular.module('components.int-head', [])
    .component('intHead', component)
    .name;