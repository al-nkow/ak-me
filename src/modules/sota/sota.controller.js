import ScreensModalController from '../../components/screens-modal/screens-modal.controller';

export default class SotaController {

    constructor($mdDialog, $timeout) {
        this.$mdDialog = $mdDialog;

        this.screens = [
            '/images/sota/sota0.jpg',
            '/images/sota/sota1.jpg',
            '/images/sota/sota3.jpg',
            '/images/sota/sota4.jpg',
            '/images/sota/sota5.jpg',
            '/images/sota/sota7.jpg',
            '/images/sota/sota8.jpg',
            '/images/sota/sota9.jpg',
            '/images/sota/sota10.jpg',
            '/images/sota/sota11.jpg',
            '/images/sota/sota12.jpg',
            '/images/sota/sota13.jpg',
            '/images/sota/sota14.jpg',
            '/images/sota/sota15.jpg',
            '/images/sota/sota16.jpg',
            '/images/sota/sota17.jpg',
            '/images/sota/sota18.jpg',
            '/images/sota/sota19.jpg',
            '/images/sota/sota20.jpg',
            '/images/sota/sota21.jpg',
            '/images/sota/sota22.jpg',
            '/images/sota/sota23.jpg',
            '/images/sota/sota24.jpg',
            '/images/sota/sota26.jpg',
            '/images/sota/sota27.jpg',
            '/images/sota/sota28.jpg',
            '/images/sota/sota29.jpg',
            '/images/sota/sota30.jpg',
            '/images/sota/sota31.jpg',
            '/images/sota/sota32.jpg',
            '/images/sota/sota33.jpg',
            '/images/sota/sota34.jpg',
            '/images/sota/sota35.jpg',
            '/images/sota/sota36.jpg',
            '/images/sota/sota37.jpg',
            '/images/sota/sota38.jpg',
            '/images/sota/sota39.jpg',
            '/images/sota/sota40.jpg',
            '/images/sota/sota41.jpg',
            '/images/sota/sota42.jpg',
            '/images/sota/sota43.jpg',
            '/images/sota/sota44.jpg'
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
