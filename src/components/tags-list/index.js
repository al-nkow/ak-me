import './tags-list.styles.less';

import angular from 'angular';

import component from './tags-list.component';

export default angular.module('components.tags-list', [])
    .component('tagsList', component)
    .name;