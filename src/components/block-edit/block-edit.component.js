class BlockEditComponentController {
    constructor() {
        this.type = this.type || 'text';
    }
}

export default {
    template: require('./block-edit.template.pug'),
    controller: BlockEditComponentController,
    controllerAs: 'vc',
    bindings: {
        model: '=',
        type: '=?',
        toggle: '=?',
        placeholder: '=?'
    }
};
