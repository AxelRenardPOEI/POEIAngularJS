angular.module('AngularExo03').config(function($routeProvider) {
    
        $routeProvider.when('/', {
            templateUrl: 'src/app/home/home.html',
            controller: 'HomeCtrl'
        });

        $routeProvider.when('/exo03', {
            templateUrl: 'src/app/exo03/exo03.html',
            controller: 'Exo03Ctrl'
        });
        /* Add New Routes Above */
        $routeProvider.otherwise({redirectTo:'/'});
        
});

(function() {
  'use strict';

  angular.module('daproject', [
    'ui.bootstrap',
    'ngRoute',
    'ngAnimate'
  ]);

  angular.module('daproject')
    .config(AppConfig);

  angular.module('daproject')
    .run(RunUtils);

  function AppConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/app/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
      })
      .otherwise({redirectTo:'/'});
  }

  function RunUtils($rootScope) {
    $rootScope.safeApply = function(fn) {
      var phase = $rootScope.$$phase;
      if (phase === '$apply' || phase === '$digest') {
        if (fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };
  }

})();
