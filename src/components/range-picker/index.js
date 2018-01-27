import './range-picker.styles.less';

import angular from 'angular';

import component from './range-picker.component';

export default angular.module('components.range-picker', [])
    .component('rangePicker', component)
    .name;