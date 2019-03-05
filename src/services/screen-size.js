import angular from 'angular';

class ScreenSize {

  constructor() {
      this.e = document.documentElement;
      this.g = document.getElementsByTagName('body')[0];
  }

  get () {
      return {
          x: window.innerWidth || this.e.clientWidth || this.g.clientWidth,
          y: window.innerHeight|| this.e.clientHeight|| this.g.clientHeight
      }
  }
}

export default angular.module('services.screen-size', [])
  .service('ScreenSize', ScreenSize)
  .name;