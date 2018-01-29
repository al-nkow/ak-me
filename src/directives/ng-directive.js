export default angular.module('directives.ng-directive', [])
    .directive('ngDirective', function($compile){
        return {
            restrict: 'A',
            link: function($scope, element, attrs){
                attrs.$observe('ngDirective', function(directive) {
                    element.html('');
                    element.append($compile(angular.element('<div class="nav-icon" ' + directive + '></div>'))($scope));
                });
            }
        };
    }).name;