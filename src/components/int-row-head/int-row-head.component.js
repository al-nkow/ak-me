class IntRowHeadComponentController {
    constructor() {
        this.type = this.type || 'full';
    }
}

export default {
    template: require('./int-row-head.template.pug'),
    controller: IntRowHeadComponentController,
    controllerAs: 'vc',
    bindings: {
        type: '=?',
        title: '=?'
    }
}