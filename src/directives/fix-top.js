export default angular.module('directives.fix-top', [])
    .directive('iconTop', function($window){
        let $win = angular.element($window); // wrap window object as jQuery object
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                let topClass = attrs.setClassWhenAtTop,
                    offsetTop = element.offset().top;
                // console.log($win.scrollTop());
                // console.log(offsetTop);
                $win.on('scroll', function (e) {
                    if ($win.scrollTop() >= offsetTop) {
                        element.addClass(topClass);
                    } else {
                        element.removeClass(topClass);
                    }
                });
            }
        };
    }).name;