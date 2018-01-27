export default {
    template: '<div class="edit-but" ng-class="{\'light\': vc.light}"' +
    'ng-click="vc.toggle = !vc.toggle">' +
    '<div class="edit-but__icon" icon-pen ng-if="!vc.toggle"></div>' +
    '<div class="edit-but__icon edit-but__icon_cross" icon-cross ng-if="vc.toggle"></div>' +
    '</div>',
    controller: () => { },
    controllerAs: 'vc',
    bindings: {
        toggle: '=?',
        light: '=?'
    }
}

