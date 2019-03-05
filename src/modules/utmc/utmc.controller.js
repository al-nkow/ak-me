import ScreensModalController from '../../components/screens-modal/screens-modal.controller';

export default class UtmcController {

    constructor($mdDialog, $timeout, ScreenSize) {
        this.$mdDialog = $mdDialog;
        this.ScreenSize = ScreenSize;

        this.screens = [
            '/images/utmc/utmc1.jpg',
            '/images/utmc/utmc2.jpg',
            '/images/utmc/utmc3.jpg',
            '/images/utmc/utmc4.jpg',
            '/images/utmc/utmc5.jpg',
            '/images/utmc/utmc6.jpg',
            '/images/utmc/utmc7.jpg',
            '/images/utmc/utmc8.jpg',
            '/images/utmc/utmc9.jpg',
            '/images/utmc/utmc10.jpg',
            '/images/utmc/utmc11.jpg',
            '/images/utmc/utmc12.jpg',
            '/images/utmc/utmc13.jpg',
            '/images/utmc/utmc14.jpg',
            '/images/utmc/utmc15.jpg',
            '/images/utmc/utmc16.jpg',
            '/images/utmc/utmc17.jpg',
            '/images/utmc/utmc18.jpg',
            '/images/utmc/utmc19.jpg',
            '/images/utmc/utmc20.jpg',
            '/images/utmc/utmc21.jpg',
            '/images/utmc/utmc22.jpg',
            '/images/utmc/utmc23.jpg',
            '/images/utmc/utmc24.jpg',
            '/images/utmc/utmc25.jpg',
            '/images/utmc/utmc26.jpg',
            '/images/utmc/utmc27.jpg',
            '/images/utmc/utmc28.jpg',
            '/images/utmc/utmc29.jpg',
            '/images/utmc/utmc30.jpg',
            '/images/utmc/utmc31.jpg',
            '/images/utmc/utmc32.jpg',
            '/images/utmc/utmc33.jpg',
            '/images/utmc/utmc34.jpg',
            '/images/utmc/utmc35.jpg',
            '/images/utmc/utmc36.jpg',
            '/images/utmc/utmc37.jpg',
            '/images/utmc/utmc38.jpg',
            '/images/utmc/utmc39.jpg',
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


