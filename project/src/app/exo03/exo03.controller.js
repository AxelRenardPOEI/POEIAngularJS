(function() {
  'use strict';

  function Exo03Ctrl($location) {
    var vm = this;





vm.films= [
	{name: 'Fast and Furious', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/AkSMd8AXSpA1L1SbBPc2AfVJfmE.jpg', year: 2001},
	{name: '2 Fast 2 Furious', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/u1Snfl40rXmAJNiMyZUczUyFVuf.jpg', year: 2003},
	{name: 'Fast & Furious: Tokyo Drift', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/4ceW7kWPAc2uFG5WzYDbP8Od3gw.jpg', year: 2006}
];

    vm.SaveFilm = SaveFilm; 

    function SaveFilm(nom) {
      for (var i = vm.films.length - 1; i >= 0; i--) {
        
        if(vm.films[i].name === nom)
        {
          var filmSave = vm.films[i];
          console.log(filmSave.name);
        }
      }
      
    }

vm.alert = alert;

function alert(text) {
	console.log(text);
}

}

Exo03Ctrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('Exo03Ctrl', Exo03Ctrl);

})(); 