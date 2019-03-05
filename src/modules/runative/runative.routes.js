export default function routes($stateProvider) {

  $stateProvider.state('root.portfolio.runative', {
    url: '/runative',
    views: {
      'content@': {
        template: require('./runative.template.pug'),
        controller: 'RunativeController',
        controllerAs: 'vc'
      }
    }
  });

}