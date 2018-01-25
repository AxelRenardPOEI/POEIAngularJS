(function() {
  'use strict';
    

    function Exo04Ctrl($location, monService, monServiceMeteo) {
        var vm = this;
        
        vm.superService = monService;
        vm.meteoService = monServiceMeteo;
        vm.affichernote = affichernote;
        vm.input = '';

        function affichernote()
        {
            monService.city = vm.input;
            console.log(monService.city);
            monServiceMeteo.getMeteo();
        }
    
        
    }

    Exo04Ctrl.$inject = ['$location', 'monService', 'monServiceMeteo'];
    angular.module('daproject')
        .controller('Exo04Ctrl', Exo04Ctrl);

})();