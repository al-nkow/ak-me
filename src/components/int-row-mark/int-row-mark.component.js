class IntRowMarkComponentController {
    constructor() {
        this.estimates = [0, 1, 2, 3, 4, 5];
        this.model = this.model || {};
    }
}

export default {
    template: require('./int-row-mark.template.pug'),
    controller: IntRowMarkComponentController,
    controllerAs: 'vc',
    bindings: {
        model: '=?',
        title: '=?',
        toggle: '=?'
    }
}

