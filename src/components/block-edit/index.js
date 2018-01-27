import './block-edit.styles.less';

import angular from 'angular';

import component from './block-edit.component';

export default angular.module('components.block-edit', [])
    .component('blockEdit', component)
    .name;