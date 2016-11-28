(function() {

var app = angular.module("madLibIt");

app.controller("inputController", function($scope, wordStorage){
  $scope.poem = function(){
      var madLibs = $scope.data;

      wordStorage.setMadLibs(madLibs);
      location.hash = "/output";
  };
});



})();
