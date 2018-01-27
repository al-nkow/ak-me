class ProfileCellComponentController {
    constructor() { }
}

export default {
    template: require('./profile-cell.template.pug'),
    controller: ProfileCellComponentController,
    controllerAs: 'vc',
    bindings: {
        model: '=?',
        candidate: '=?',
        user: '=?',
        priorities: '=?',
        projects: '=?',
        levels: '=?'
    }
};