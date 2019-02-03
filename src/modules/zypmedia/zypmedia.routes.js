export default function routes($stateProvider) {

  $stateProvider.state('root.portfolio.zypmedia', {
    url: '/zypmedia',
    views: {
      'content@': {
        template: require('./zypmedia.template.pug'),
        controller: 'ZypmediaController',
        controllerAs: 'vc'
      }
    }
  });

}