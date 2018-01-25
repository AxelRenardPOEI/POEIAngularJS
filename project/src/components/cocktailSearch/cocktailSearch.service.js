(function() {
    'use strict';
  
    function cocktailSearch($http,searchConfig) {
      var service = {};
        service.cocktailList=[];
        service.getCocktails=getCocktails;
        service.cocktailDetail = {};
        service.getCocktailDetails=getCocktailDetails;
        
        function getCocktails()
        {
            return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+searchConfig.ingredient)
            .then (function(response){
                console.log('Sucess1: %o', response);
                service.cocktailList = response.data.drinks;
                console.log(response.drinks);
            })
            .catch(function(error){
                console.log('Error1: %0', error);
                service.cocktailList=[];
            });
        }
        
        function getCocktailDetails(cocktailId)
        {
            return $http.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+cocktailId)
            .then (function(response){
                console.log('Sucess2: %o', response);
                service.cocktailDetail = response.data.drinks[0];
                console.log(response.drinks[0]);
            })
            .catch(function(error){
                console.log('Error2: %0', error);
                service.cocktailDetail = {};
            });
        }

      return service;
    }

    cocktailSearch.$inject = ['$http','searchConfig'];
    
    angular.module('daproject')
        .factory('cocktailSearch', cocktailSearch);
  
})();