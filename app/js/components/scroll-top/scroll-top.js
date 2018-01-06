;(function() {
	'use strict';

	function ScrollTopButtonController($window, $log, $scope) {
		var self = this;

		this.showbut = false;

		var screen = window.innerHeight; // размер видимой части окна
		var wrap = angular.element(document.querySelector('#maincontent'));

		this.init = function() {
			wrap.bind('scroll', function(e) {
				var top = wrap[0].scrollTop; // величина прокрутки
				self.showbut = (top + 50) > screen ? true : false;
				$scope.$apply();
			});
		}

		this.scrollToTop = function() {
			// wrap[0].scrollTop = 0;
			// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
			var lastTime = 0;
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
				|| window[vendors[x]+'CancelRequestAnimationFrame'];
			}
			if (!window.requestAnimationFrame)
				window.requestAnimationFrame = function(callback, element) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
					timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
			if (!window.cancelAnimationFrame)
				window.cancelAnimationFrame = function(id) {
					clearTimeout(id);
				};
			// ------------------------------------------------

			var currentScrollTop = wrap[0].scrollTop;
			var animID; // нужен чтобы остановить анимацию
			function step() {
				if(currentScrollTop > 0) {
					animID = requestAnimationFrame(step);
					currentScrollTop = currentScrollTop - 200;
					wrap[0].scrollTop = currentScrollTop;
				} else {
					window.cancelAnimationFrame(animID);
				}
			}
			step();

		}

		this.init();

	}

	angular
	.module('myApp')
	.component('scrollTop', {
		templateUrl: '/templates/components/scroll-top/scroll-top.html',
		controller: ScrollTopButtonController,
		controllerAs: 'vc',
		bindings: {
			elem: '='
		}
	});

})();