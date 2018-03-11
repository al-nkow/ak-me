import ScreensModalController from '../../components/screens-modal/screens-modal.controller';

export default class HRPortalController {

    constructor($mdDialog, $timeout) {
        this.$mdDialog = $mdDialog;

        this.screens = [
            '/images/hrportal/hrp20.jpg',
            '/images/hrportal/hrp21.jpg',
            '/images/hrportal/hrp22.jpg',
            '/images/hrportal/hrp23.jpg',
            '/images/hrportal/hrp24.jpg',
            '/images/hrportal/hrp1.jpg',
            '/images/hrportal/hrp2.jpg',
            '/images/hrportal/hrp3.jpg',
            '/images/hrportal/hrp4.jpg',
            '/images/hrportal/hrp14.jpg',
            '/images/hrportal/hrp5.jpg',
            '/images/hrportal/hrp6.jpg',
            '/images/hrportal/hrp7.jpg',
            '/images/hrportal/hrp8.jpg',
            '/images/hrportal/hrp9.jpg',
            '/images/hrportal/hrp10.jpg',
            '/images/hrportal/hrp11.jpg',
            '/images/hrportal/hrp12.jpg',
            '/images/hrportal/hrp15.jpg',
            '/images/hrportal/hrp16.jpg',
            '/images/hrportal/hrp17.jpg',
            '/images/hrportal/hrp18.jpg',
            '/images/hrportal/hrp19.jpg',
            '/images/hrportal/hrp25.jpg',
            '/images/hrportal/hrp26.jpg',
            '/images/hrportal/hrp27.jpg',
            '/images/hrportal/hrp28.jpg'
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


