import './edit-but.styles.less';

import angular from 'angular';

import component from './edit-but.component';

export default angular.module('components.edit-but', [])
    .component('editBut', component)
    .name;