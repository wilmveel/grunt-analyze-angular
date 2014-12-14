var app = angular.module("app", ['ngRoute', 'app1']);

// add controller on global variable
app.controller("appController", function(){

});

// add provider on global variable
app.provider('unicornLauncher', function UnicornLauncherProvider() {
  var useTinfoilShielding = false;

  this.useTinfoilShielding = function(value) {
    useTinfoilShielding = !!value;
  };

  this.$get = ["apiToken", function unicornLauncherFactory(apiToken) {
    return new UnicornLauncher(apiToken, useTinfoilShielding);
  }];
});

// add directive on global variable
app.directive('myPlanet', ['planetName', function myPlanetDirectiveFactory(planetName) {
  // directive definition object
  return {
    restrict: 'E',
    scope: {},
    link: function($scope, $element) { $element.text('Planet: ' + planetName); }
  }
}]);

// add constant on global variable
app.constant('planetName', 'Greasy Giant');

// add controller on module variable
angular.module("app")
.controller("testController", function(){

});

// add service on module variable
angular.module("app")
.service("testService", function(){

});

// add factory on module variable
angular.module("app")
.factory("testFactory", function(){

});

// add filter on module variable
angular.module("app")
.filter("testFilter", function(){

});

// add value on module variable
angular.module("app")
.value('clientId', 'a12345654321x');

// add controlle on sub module variable
angular.module("app1", [])
.controller("testController1", function(){

});

// add controlle on sub module variable
angular.module("app1").animation('.my-crazy-animation', function() {
  return {
    enter: function(element, done) {
      return function(cancelled) {
      };
    },
    leave: function(element, done) { },
    move: function(element, done) { },

    beforeAddClass: function(element, className, done) { },

    addClass: function(element, className, done) { },

    beforeRemoveClass: function(element, className, done) { },

    removeClass: function(element, className, done) { }
  };
});

