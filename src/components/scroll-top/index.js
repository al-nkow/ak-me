import './scroll-top.styles.styl';

import angular from 'angular';

import component from './scroll-top.component';

export default angular.module('components.scroll-top', [])
    .component('scrollTop', component)
    .name;