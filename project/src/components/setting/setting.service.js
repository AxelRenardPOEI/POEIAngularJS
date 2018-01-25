(function() {
    'use strict';
  
    function monService() {
      var service = {};
      service.city = '';
        service.isCelsius = true;

      return service;
    }

    monService.$inject = [];
    
    angular.module('daproject')
        .factory('monService', monService);
  
})();