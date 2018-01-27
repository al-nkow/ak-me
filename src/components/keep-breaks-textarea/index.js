// keep-breaks-textarea
import './keep-breaks-textarea.styles.less';

import angular from 'angular';

import component from './keep-breaks-textarea.component';

export default angular.module('components.keep-breaks-textarea', [])
    .component('keepBreaksTextarea', component)
    .name;