(function(){
  var app =angular.module("madLibIt",["ngRoute"]);

  app.config(function($routeProvider){
    $routeProvider.when("/input",{
      templateUrl:"views/formIn.html",
      controller: "inputController"
    });
      $routeProvider.when("/output",{
        templateUrl:"views/madlibOut.html",
        controller: "outputController"
      });


    });

})();
