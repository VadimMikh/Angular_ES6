export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/components/todo/todo.html'
    });

  $urlRouterProvider.otherwise('/');
}
