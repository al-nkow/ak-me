export default function routes($stateProvider) {

  $stateProvider.state('root.portfolio.prokach', {
    url: '/prokach',
    views: {
      'content@': {
        template: require('./prokach.template.pug'),
        controller: 'ProkachController',
        controllerAs: 'vc'
      }
    }
  });

}