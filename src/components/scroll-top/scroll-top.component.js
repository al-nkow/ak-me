class ScrollTopButtonController {

    constructor($scope) {
        let screen = window.innerHeight; // размер видимой части окна
        this.wrap = angular.element(document.querySelector('#maincontent'));
        this.showbut = false;

        this.wrap.bind('scroll', (e) => {
            let top = this.wrap[0].scrollTop; // величина прокрутки
            this.showbut = (top + 50) > screen ? true : false;
            $scope.$apply();
        });
    }

    scrollToTop() {
        // wrap[0].scrollTop = 0;
        // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
        let lastTime = 0;
        let vendors = ['ms', 'moz', 'webkit', 'o'];
        for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = (callback, element) => {
                let currTime = new Date().getTime();
                let timeToCall = Math.max(0, 16 - (currTime - lastTime));
                let id = window.setTimeout(() => {
                        callback(currTime + timeToCall);
                    },
                    timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = (id) => {
                clearTimeout(id);
            };
        // ------------------------------------------------

        let currentScrollTop = this.wrap[0].scrollTop;
        let animID; // need to stop animation
        let step = () => {
            if (currentScrollTop > 0) {
                animID = requestAnimationFrame(step);
                currentScrollTop = currentScrollTop - 200;
                this.wrap[0].scrollTop = currentScrollTop;
            } else {
                window.cancelAnimationFrame(animID);
            }
        };

        step();

    }

}

export default {
    template: require('./scroll-top.template.pug'),
    controller: ScrollTopButtonController,
    controllerAs: 'vc',
    bindings: {
        elem: '='
    }
};