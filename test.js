var expect = require('chai').expect
  , flatten = require('./')

describe('flatten', function() {
  it('should flatten array', function() {
    expect([[1],[2],[3]].reduce(flatten)).to.be.eql([1,2,3])
  })
})