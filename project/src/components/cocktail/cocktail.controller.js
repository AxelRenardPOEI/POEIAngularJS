(function() {
  'use strict';
    

    function DirCtrl($location,cocktailSearch) {
        var vm = this;
        vm.cocktailSearch=cocktailSearch;
    
        cocktailSearch.getCocktailDetails(vm.input2);
    }

    DirCtrl.$inject = ['$location','cocktailSearch'];
    angular.module('daproject')
        .controller('DirCtrl', DirCtrl);

})();