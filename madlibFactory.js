(function(){

var app = angular.module("madLibIt");

app.factory("wordStorage", function(){
  var madLibs = {};
  return {
      setMadLibs: function (userWords){
        madLibs = userWords;
      },
      getMadLibs: function (){
        return madLibs;
      }
  };
});

})();
