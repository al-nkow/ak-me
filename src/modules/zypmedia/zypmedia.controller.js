import ScreensModalController from '../../components/screens-modal/screens-modal.controller';

export default class ZypmediaController {

  constructor($mdDialog, $timeout) {
    this.$mdDialog = $mdDialog;

    this.screens = [
      '/images/zypmedia/zypmedia3.jpg',
      '/images/zypmedia/zypmedia4.jpg',
      '/images/zypmedia/zypmedia5.jpg',
      '/images/zypmedia/zypmedia6.jpg',
      '/images/zypmedia/zypmedia7.jpg',
      '/images/zypmedia/zypmedia8.jpg',
      '/images/zypmedia/zypmedia9.jpg',
      '/images/zypmedia/zypmedia10.jpg',
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


