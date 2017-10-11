(function(){

	//- директива для динамического добавления директив в цикле ng-repeat
	//- в атрибуте ng-directive нужно указать название директивы, которая будет добавлена к элементу
	myApp.directive('ngDirective', ['$compile', function($compile){
		return {
			restrict: 'A',
			link: function($scope, element, attrs){
				attrs.$observe('ngDirective', function(directive) {
					element.html('');
					element.append($compile(angular.element('<div class="nav-icon" ' + directive + '></div>'))($scope));
				});
			}
		};
	}]);

})();