import './lang-select.styles.less';

import angular from 'angular';

import component from './lang-select.component';

export default angular.module('components.lang-select', [])
    .component('langSelect', component)
    .name;