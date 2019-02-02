import ScreensModalController from '../../components/screens-modal/screens-modal.controller';

export default class FundSourceController {

  constructor($mdDialog, $timeout) {
    this.$mdDialog = $mdDialog;

    this.screens = [
      '/images/fundsource/fundsource1.jpg',
      '/images/fundsource/fundsource2.jpg',
      '/images/fundsource/fundsource3.jpg',
      '/images/fundsource/fundsource4.jpg',
      '/images/fundsource/fundsource5.jpg',
      '/images/fundsource/fundsource6.jpg',
      '/images/fundsource/fundsource7.jpg',
      '/images/fundsource/fundsource8.jpg',
      '/images/fundsource/fundsource9.jpg',
      '/images/fundsource/fundsource10.jpg',
      '/images/fundsource/fundsource11.jpg',
      '/images/fundsource/fundsource12.jpg',
      '/images/fundsource/fundsource13.jpg',
      '/images/fundsource/fundsource14.jpg'
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


