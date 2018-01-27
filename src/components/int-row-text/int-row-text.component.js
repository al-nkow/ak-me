class IntRowTextComponentController {
    constructor() {
    }
}

export default {
    template: require('./int-row-text.template.pug'),
    controller: IntRowTextComponentController,
    controllerAs: 'vc',
    bindings: {
        model: '=?',
        title: '=?',
        toggle: '=?',
        placeholder: '=?'
    }
}

