(function() {
  'use strict';
    

    function FinalCtrl(searchConfig,cocktailSearch) {
        var vm = this;

        vm.input2='';
        vm.afficheralcool = afficheralcool;
        vm.superSearch = searchConfig;
        vm.hyperSearch = cocktailSearch;
        
        function afficheralcool()
        {
            searchConfig.ingredient = vm.input2;
            console.log(searchConfig.ingredient);
            cocktailSearch.getCocktails();
            
        }
        
    }

    FinalCtrl.$inject = ['searchConfig','cocktailSearch'];
    angular.module('daproject')
        .controller('FinalCtrl', FinalCtrl);

})();