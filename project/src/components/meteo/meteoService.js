(function() {
    'use strict';
  
    function monServiceMeteo($http, monService) {
      var service = {};
      service.meteoListe = [];
        service.getMeteo = getMeteo;
        
     function getMeteo()
        {
            return $http.get('http://api.openweathermap.org/data/2.5/forecast?q='+monService.city+'&APPID=86d4ef35d7c984f94d3700c77fe55c2a&units=metric')
            .then (function(response){
                console.log('Sucess: %o', response);
                service.meteoListe=response.data.list;
                console.log(service.meteoListe);
            })
            .catch(function(error){
                console.log('Error: %0', error);
                service.meteoListe=[];
            });
        }

      return service;
    }

    monServiceMeteo.$inject = ['$http', 'monService'];
    
    angular.module('daproject')
        .factory('monServiceMeteo', monServiceMeteo);
  
})();