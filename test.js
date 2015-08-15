var expect = require('chai').expect
  , flatten = require('./')

describe('flatten', function() {
  it('should flatten array', function() {
    expect([[1],[2],[3]].reduce(flatten)).to.be.eql([1,2,3])
  })

  it('should flatten array recursively', function() {
    expect([[[1,1]],[2],[3]].reduce(flatten, [])).to.be.eql([1,1,2,3])
  })

  it('should flatten array - 0', function() {
    expect([].reduce(flatten, [])).to.be.eql([])
  })

  it('should flatten array - 1', function() {
    expect([[1]].reduce(flatten, [])).to.be.eql([1])
  })

  it('should flatten array - 2', function() {
    expect([[1],[2]].reduce(flatten, [])).to.be.eql([1,2])
  })

})