app.controller("HerolistingController", ["$http", function($http) {
  console.log('herolisting controller running');
  var self = this;
  self.heroArray = [];
  getHeroes();

  function getHeroes(){
    $http.get('/heroes')
      .then(function(response) {
        self.heroArray = response.data;
        console.log(self.heroArray);

      });
  }
  self.deleteHero = function(deleteObj){
    console.log("deleted an object", deleteObj);
    $http.delete('/heroes/' + deleteObj.id)
    .then(function(response){
      getHeroes();
    });
  }
}]);
