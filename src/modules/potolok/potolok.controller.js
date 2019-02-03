export default class PotolokController {

  constructor($timeout) {

    this.showbut  = false;
    this.top      = 0;
    let wrap = angular.element(document.querySelector('#maincontent'));
    $timeout(() => { if (this.top === 0) this.showbut = true; }, 2000);

    wrap.bind('scroll', () => {
      this.top = wrap[0].scrollTop;
      this.showbut = this.top === 0;
    });
  }

}
