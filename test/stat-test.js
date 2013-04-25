var RunningStats = require('../index.js');

var vows   = require('vows');
var assert = require('assert');

vows.describe('RunningStats').addBatch({
  'When using 1, 5, and 10 as values': {
    topic: function () {
      var rs = RunningStats();
      rs.push(1);
      rs.push(5);
      rs.push(10);
      return rs;
    },
    'The number of values should be 3': function( rs ){
      assert.equal(rs.nvals(), 3);
    },
    'The rounded mean should be 5': function ( rs ) {
      assert.equal(Math.round(rs.mean()), 5);
    },
    'The rounded variance should be 20': function ( rs ) {
      assert.equal(Math.round(rs.variance()), 20);
    },
    'The rounded standard deviation should be 5': function ( rs ) {
      assert.equal(Math.round(rs.std_dev()), 5);
    }
  }
}).export(module);
