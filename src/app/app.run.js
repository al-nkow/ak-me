export default function run($timeout, amToast, $rootScope, $state, $templateCache, $templateRequest, $q) {

    $rootScope.stateName = 'root';

    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
        $rootScope.stateName = toState.name;
    });

}

