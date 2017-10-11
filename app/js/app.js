var myApp = angular.module('myApp', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'ngAnimate',
    'myApp.home',
    'myApp.about',
    'myApp.contacts',
    'myApp.portfolio'
]);

// ------------- ROUTE -------------
myApp.config(myroute);
// myroute.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function myroute($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
            url: '/',
            // abstract: 'true',
            views: {
                'content@': {
                    templateUrl: 'templates/home/home.html',
                    controller: 'HomeCtrl as vc'
                }
            }
        })
        .state('root.about', {
            url: 'about',
            views: {
                'content@': {
                    templateUrl: 'templates/about/about.html',
                    controller: 'AboutCtrl as vc'
                }
            }
        })
        .state('root.portfolio', {
            url: 'portfolio',
            views: {
                'content@': {
                    templateUrl: 'templates/portfolio/portfolio.html',
                    controller: 'PortfolioCtrl as vc'
                }
            }   
        })
        .state('root.portfolio.sota', {
            url: '/sota',
            views: {
                'content@': {
                    templateUrl: 'templates/sota/sota.html',
                    controller: 'SotaCtrl as vc'
                }
            }   
        })
        .state('root.contacts', {
            url: 'contacts',
            views: {
                'content@': {
                    templateUrl: 'templates/contacts/contacts.html',
                    controller: 'ContactsCtrl as vc'
                }
            }   
        });

    /*$locationProvider.html5Mode({
        requireBase: false,
        enabled: true
    });*/

};
// ------------- eof ROUTE -------------

// ------------- RUN -------------
myApp.run(runFunc);
// runFunc.$inject = ['$state', '$rootScope'];
function runFunc($state, $rootScope) {

    $rootScope.stateName = 'root';

    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {

        $rootScope.stateName = toState.name;

    // if (toState.name.indexOf('tool') > -1 && !$cookies.Session) {
    //     // If logged out and transitioning to a logged in page:
    //     e.preventDefault();
    //     $state.go('public.login');
    // } else if (toState.name.indexOf('public') > -1 && $cookies.Session) {
    //     // If logged in and transitioning to a logged out page:
    //     e.preventDefault();
    //     $state.go('tool.suggestions');
    // };

    });
};
// ------------- eof RUN -------------
