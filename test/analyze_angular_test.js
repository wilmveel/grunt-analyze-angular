'use strict';

var fs = require('fs');

exports.angular = {
  module: function(test) {
    
    test.expect(1);
    var actual = JSON.parse(fs.readFileSync('analyze/angular.json', 'utf8'));
    var module = ["ngRoute", "app", "app1"];
    test.deepEqual(module, actual.module);
    test.done();

  },
  controller: function(test) {
    
    test.expect(1);
    var actual = JSON.parse(fs.readFileSync('analyze/angular.json', 'utf8'));
    var controller = ["appController", "testController", "testController1"];
    test.deepEqual(controller, actual.controller);
    test.done();

  },
  provider: function(test) {
    
    test.expect(1);
    var actual = JSON.parse(fs.readFileSync('analyze/angular.json', 'utf8'));
    var provider = ["$route", "$routeParams", "unicornLauncher"];
    test.deepEqual(provider, actual.provider);
    test.done();

  }

};