
var onlyExcept = require('..');
var should = require('should');

var obj = {
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com',
  _id: '12345'
};

var expectedOnly = {
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com'
};

var expectedExcept = {
  name: 'tobi',
  last: 'holowaychuk'
};

describe('onlyExcept(obj, keys): only', function(){
  describe('given an array', function(){
    it('should return only the whitelisted properties', function(){
      onlyExcept(obj, ['name', 'email', 'last']).should.eql(expectedOnly);
    })
  })

  describe('given an string', function(){
    it('should return only the whitelisted properties', function(){
      onlyExcept(obj, 'name email last').should.eql(expectedOnly);
    })
  })

  it('should omit undefineds', function(){
    onlyExcept({}, 'foo bar baz').should.eql({});
  })
})

describe('onlyExcept(obj, keys): except', function(){
  describe('given an array', function(){
    it('should return the object except blacklisted properties', function(){
      onlyExcept(obj, ['-_id', '-email']).should.eql(expectedExcept);
    })
  })

  describe('given an string', function(){
    it('should return only the whitelisted properties', function(){
      onlyExcept(obj, '-_id -email').should.eql(expectedExcept);
    })
  })

  describe('given a non existent property', function(){
    it('should return the whole object', function(){
      onlyExcept(obj, '-dummy').should.eql(obj);
    })
  })

  it('should omit undefineds', function(){
    onlyExcept({}, '-foo').should.eql({});
  })
})
