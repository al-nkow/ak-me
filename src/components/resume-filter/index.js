import './resume-filter.styles.less';

import angular  from 'angular';

import component from './resume-filter.component';

export default angular.module('components.resume-filter', [])
    .component('resumeFilter', component)
    .name;