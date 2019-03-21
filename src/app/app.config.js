import moment from 'moment';

export default function routing($urlRouterProvider, $locationProvider, $stateProvider, $mdThemingProvider, $mdDateLocaleProvider, $compileProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
        .accentPalette('red');

    $mdDateLocaleProvider.formatDate = (date) => {
        let m = moment(date);
        return m.isValid() ? m.format('DD.MM.YYYY') : '';
    };

    $mdDateLocaleProvider.firstDayOfWeek = 1;
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|mailto|skype|callto):/);


    $locationProvider.html5Mode(true);

    /* OLD: $locationProvider.html5Mode({
     requireBase: false,
     enabled: true
     });*/

    $urlRouterProvider.otherwise('/'); // if no route - redirect on '/' page

}

