class BkTagsListCtrl {

    constructor() { }

}

export default {
    template: require('./tags-list.template.pug'),
    controller: BkTagsListCtrl,
    controllerAs: 'vc',
    bindings: {
        data: '<',
    },
}