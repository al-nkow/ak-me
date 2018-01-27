import './current-user.styles.less';

import angular from 'angular';

import component from './current-user.component';

export default angular.module('components.current-user', [])
    .component('currentUser', component)
    .name;