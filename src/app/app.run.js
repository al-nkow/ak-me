export default function run($timeout, ngToast, ConfigService, LoginService, $rootScope, UserService, $state, $templateCache, $templateRequest, $q, SpinnerService) {

    SpinnerService.hideSpinner();

    ConfigService.getEnv().then((res) => {
        if (res && res.data === 'dev') {
            window.api_server = 'http://hrportal.bkz/#/';
        } else if (res && res.data === 'prod') {
            window.api_server = 'https://hr.bekitzur.com/#/';
        } else {
            console.log('GET EVIRONMENT: ', res);
        }
    }).catch((err) => {
        console.log('GET EVIRONMENT ERROR: ', err);
    });

    $rootScope.checkAuth = false; // Initial authentication check

    let disableTransition = function (event, state) {
        event.preventDefault();
        ngToast.create('You do not have permission to access this section!', 'alert', 1000);
        $state.go(state);
        SpinnerService.hideSpinner()
    };

    // ---------
    // $rootScope.$on('$stateChangeStart', () => { $rootScope.loading = true; /*SpinnerService.showSpinner();*/ });
    // $rootScope.$on('$stateChangeSuccess', () => {
    //     $rootScope.loading = false;
    //     // $timeout(() => { $rootScope.loading = false; }, 500)
    //     /*SpinnerService.hideSpinner();*/
    // });
    // $rootScope.$on('$stateChangeError', () => { $rootScope.loading = false; /*SpinnerService.hideSpinner();*/ });
    // ---------

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $rootScope.currentState = toState.name;
    });

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {

        let currentUser = UserService.getUser();

        if (!currentUser && !$rootScope.checkAuth) {
            event.preventDefault();

            LoginService.me().then(function () {
                $rootScope.checkAuth = true;
                $state.go(toState, toParams);
            });

        } else {

            // An unauthorized user has access only to the `login` state, `sample` sate ...
            if (!currentUser
                && toState.name !== 'app.login'
                && toState.name !== 'app.sample'
                && toState.name !== 'app.sample.list'
                && toState.name !== 'app.sample.resume'
                && toState.name !== 'app.users.set-password'
                && toState.name !== 'app.users.reset-password'
            ) {
                event.preventDefault();
                $state.go('app.login');
            }
            // CHECK URL './USERS'
            else if (toState.name === 'app.users.list'
                && currentUser.role !== 'admin'
            ) {
                disableTransition(event, 'app.dashboard');
            }
            // CHECK URL './USERS/CURRENT'
            else if (toState.name === 'app.users.current'
                && currentUser.role === 'guest'
            ) {
                disableTransition(event, 'app.dashboard');
            }
            // CHECK URL './CANDIDATE/PARSE'
            else if (toState.name === 'app.candidate.parse'
                && currentUser.role !== 'admin'
                && currentUser.role !== 'hr'
            ) {
                disableTransition(event, 'app.dashboard');
            }
            // CHECK URL './CARD/INTERVIEW'
            else if (toState.name === 'app.card.resume.interview'
                && currentUser.role !== 'customer'
                && currentUser.role !== 'lead'
                && currentUser.role !== 'admin'
                && currentUser.role !== 'hr'
            ) {
                disableTransition(event, 'app.dashboard');
            }
            // CHECK URL './ADMIN'
            else if (toState.name === 'app.admin.menu'
                && currentUser.role !== 'customer'
                && currentUser.role !== 'lead'
                && currentUser.role !== 'admin'
                && currentUser.role !== 'hr'
            ) {
                disableTransition(event, 'app.dashboard');
            }
            // TODO: CHECK URL './ADMIN/TECHNOLOGIES' -->  toState.name == 'app.admin.technologies'
            // -----

        }

    });

}

