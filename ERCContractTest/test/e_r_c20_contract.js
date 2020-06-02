const StandardERC20 = artifacts.require("StandardERC20");

contract("StandardERC20", function() {
  it("should assert true",  function(done) {
    StandardERC20.deployed();
    assert.isTrue(true);
    done();
  });
});
