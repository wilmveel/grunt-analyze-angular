'use strict';

var fs = require('fs');

exports.size = {
  main: function(test) {
    

    test.expect(1);

    var actual = JSON.parse(fs.readFileSync('analyze/size.json', 'utf8'));
    test.equal(887738, actual.total, 'total should be 887738');
    test.done();

  }

};