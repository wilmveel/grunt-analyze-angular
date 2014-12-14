'use strict';

var fs = require('fs');

exports.size = {
  main: function(test) {
    

    test.expect(1);

    var actual = JSON.parse(fs.readFileSync('analyze/global.json', 'utf8'));
    var expect = ["app", "angular", "$", "jQuery"];

    test.deepEqual(expect, actual, 'array of global variales');
    test.done();

  }

};