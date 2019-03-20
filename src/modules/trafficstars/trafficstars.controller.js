import ScreensModalController from '../../components/screens-modal/screens-modal.controller';

export default class TrafficstarsController {

    constructor($mdDialog, $timeout, ScreenSize) {
        this.$mdDialog = $mdDialog;
        this.ScreenSize = ScreenSize;

        this.screens = [
            '/images/trafficstars/trafficstars1.jpg',
            '/images/trafficstars/trafficstars2.jpg',
            '/images/trafficstars/trafficstars3.jpg',
            '/images/trafficstars/trafficstars4.jpg',
            '/images/trafficstars/trafficstars5.jpg',
            '/images/trafficstars/trafficstars6.jpg',
            '/images/trafficstars/trafficstars7.jpg',
        ];

        this.wrap = angular.element(document.querySelector('#maincontent'));
        this.showbut = false;
        this.top = 0;
        this.$timeout = $timeout;

        this.$timeout(() => { if (this.top === 0) this.showbut = true; }, 2000);

        this.wrap.bind('scroll', () => {
            this.top = this.wrap[0].scrollTop;
            this.showbut = this.top === 0;
        });
    }

    showScreen(ev, index) {
        ev.stopPropagation();

        const { x } = this.ScreenSize.get();
        if (x <= 600) return;

        this.$mdDialog.show({
            controller: ScreensModalController,
            controllerAs: 'vc',
            template: require('../../components/screens-modal/screens-modal.template.pug'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            // fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            locals: {
                screens: this.screens,
                currentIndex: index
            },
        });
    }

}
