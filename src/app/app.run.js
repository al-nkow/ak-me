export default function run($timeout, amToast, $rootScope, $window, $state, $templateCache, $templateRequest, $q) {

    $rootScope.stateName = 'root';

    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
        $rootScope.stateName = toState.name;
    });

    $window.onload = function() {
        let preloader = document.getElementById('preloader');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    };

}

