import './resume.styles.less';

import angular from 'angular';

import component from './resume.component';

export default angular.module('components.resume', [])
    .component('resume', component)
    .name;