
describe('clear-timeouts', function(){

  var clear = require('clear-timeouts');
  var assert = require('assert');

  var j = 0;
  function incr(){ ++j; }
  setTimeout(incr);
  setTimeout(incr, 50);
  setTimeout(incr, 90);
  setTimeout(incr, 100);

  it('should clear timeouts', function(done){
    setTimeout(function(){
      clear();
      assert(2 == j);
      done();
    }, 51);
  })

  it('should clear', function(done){
    setTimeout(incr, 50);
    setTimeout(function(){
      clear();
      assert(3 == j);
      done();
    }, 101);
  })

})
