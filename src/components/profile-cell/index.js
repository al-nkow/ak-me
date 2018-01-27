import './profile-cell.styles.less';

import angular from 'angular';

import component from './profile-cell.component';

export default angular.module('components.profile-cell', [])
    .component('profileCell', component)
    .name;