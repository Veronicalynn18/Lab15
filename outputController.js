(function() {

var app = angular.module("madLibIt");

app.controller("outputController", function($scope, wordStorage){
  var madLibs = wordStorage.getMadLibs();
  $scope.madLibs = madLibs;
});

})();
