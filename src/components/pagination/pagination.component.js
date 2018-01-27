class PaginationComponentController {

    constructor($scope, $state, $stateParams) {
        this.$state = $state;
        this.pages = [];
        $scope.$watch(() => { return this.total; }, () => {
            let pagesCount = Math.ceil(this.total/this.limit);
            for (let i = 1; i <= pagesCount; i++) {
                this.pages.push(i);
            }
            this.currentPage = $stateParams.offset ? $stateParams.offset/this.limit + 1 : 1;
        });
    }

    goToPage(page) {
        this.$state.go('app.dashboard', {offset: (page - 1) * this.limit});
    }

}

export default {
    template: require('./pagination.template.pug'),
    controller: PaginationComponentController,
    controllerAs: 'vc',
    bindings: {
        limit: '=',
        total: '='
    }
};