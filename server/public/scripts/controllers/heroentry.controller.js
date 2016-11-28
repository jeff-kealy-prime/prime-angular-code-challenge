app.controller("HeroentryController", ["$http", function($http) {
  console.log('heroentry controller running');
  var self = this;

  self.heroArray = [];
  self.newHero = {};

  self.addHero = function() {
    $http.post('/heroes', self.newHero)
      .then(function(response) {
        // cool
        console.log('response: ', response.data);
        // make GET request for employee data
        self.newHero = {};
        getHeroes();
      },
      function(response) {
        // error
        console.log('ERROR response: ', response.data);
      });
  }


}]);
