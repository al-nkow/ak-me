export default class ProkachController {

    constructor($timeout) {

        this.showbut  = false;
        this.top      = 0;
        this.screens  = [
            '/images/fitness/fitness0.jpg',
            '/images/fitness/fitness1.jpg',
            '/images/fitness/fitness2.jpg',
            '/images/fitness/fitness3.jpg'
        ];
        let wrap = angular.element(document.querySelector('#maincontent'));
        $timeout(() => { if (this.top === 0) this.showbut = true; }, 2000);

        wrap.bind('scroll', () => {
            this.top = wrap[0].scrollTop;
            this.showbut = this.top === 0;
        });
    }

}
