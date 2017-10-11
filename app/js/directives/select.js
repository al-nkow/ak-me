(function(){

	myApp.directive('kgSelect', ['$compile', function($compile){
		return {
			restrict: 'A',
			replace: true,
			scope: {
				list: '=',
				kgSelect: '=',
				empty: '=',
				several: '=',
				disabled: '='
				// func: '&'
			},
			template: '<div class="kg-select {{ class }}">' +
						'<div class="kg-select__head">' +
							'<div class="kg-select__field js-close" ' +
								'ng-bind="selectVal();"' +
								'ng-click="showList();"' +
								'>' +
							'</div>' +
							'<svg ng-click="uncheckAll();" class="kg-select__head__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 44 44"><path d="m22,0c-12.2,0-22,9.8-22,22s9.8,22 22,22 22-9.8 22-22-9.8-22-22-22zm3.2,22.4l7.5,7.5c0.2,0.2 0.3,0.5 0.3,0.7s-0.1,0.5-0.3,0.7l-1.4,1.4c-0.2,0.2-0.5,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.5-7.5c-0.2-0.2-0.5-0.2-0.7,0l-7.5,7.5c-0.2,0.2-0.5,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l7.5-7.5c0.2-0.2 0.2-0.5 0-0.7l-7.5-7.5c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.2-0.2 0.5-0.3 0.7-0.3s0.5,0.1 0.7,0.3l7.5,7.5c0.2,0.2 0.5,0.2 0.7,0l7.5-7.5c0.2-0.2 0.5-0.3 0.7-0.3 0.3,0 0.5,0.1 0.7,0.3l1.4,1.4c0.2,0.2 0.3,0.5 0.3,0.7s-0.1,0.5-0.3,0.7l-7.5,7.5c-0.2,0.1-0.2,0.5 3.55271e-15,0.7z"/></svg>' +
						'</div>' +
						'<div class="kg-select__body md-whiteframe-3dp" ng-show="showdd">' +
							'<div class="kg-select__item js-close"' +
								'ng-repeat="item in list"' +
								'ng-click="addSelect(item, $index);"' +
								'>' +
								'<span ng-bind="item.name" class="js-close"></span>' +
								'<div class="kg-select__item__icon js-close" icon-uncheck ng-if="!item.checked"></div>' +
								'<div class="kg-select__item__icon js-close" icon-check ng-if="item.checked"></div>' +
							'</div>' +
						'</div>' +
					'</div>',
			controller: ['$scope', function($scope) {

				$scope.class = $scope.disabled ? 'disabled' : '';

				$scope.$watch('disabled', function(newValue, oldValue) {
					if (newValue != oldValue) {
						$scope.class = $scope.disabled ? 'disabled' : '';
					}
				});
				
				var self = this;
				
				this.$scope = $scope;
				this.$scope.showdd = false;
				
				var current = this.$scope.kgSelect;

				this.$scope.showList = function() {
					if ($scope.disabled) return false;
					self.$scope.showdd = !self.$scope.showdd;
				}
				
				this.$scope.uncheckAll = function() {
					self.$scope.showdd = false;
					current = [];
					for (var i = 0; i < self.$scope.list.length; i++) {
						self.$scope.list[i].checked = false;
					}
				}

				this.$scope.addSelect = function(item) {
					if (!item.checked) {
						current.push(item.name);
					} else {
						var i = current.indexOf(item.name);
						current.splice(i, 1);
					}
					item.checked = !item.checked;
				}

				this.$scope.selectVal = function() {
					if (!current.length) return self.$scope.empty;
					if (current.length == 1) return current[0];
					if (current.length > 1) return self.$scope.several;
				}

				$(document).on('click', function (e){
					if (!$(e.target).hasClass('js-close') && !$(e.target).parent().hasClass('js-close')) {
						self.$scope.showdd = false;
						self.$scope.$apply();
					}
				});

			}]/*,
			link: function($scope, element, attrs){
				console.log('link');
			}*/
		};
	}]);

})();
