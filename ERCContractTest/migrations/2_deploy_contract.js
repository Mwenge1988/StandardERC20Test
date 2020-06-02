const StandardERC20 = artifacts.require("StandardERC20");

module.exports = function(deployer) {
  deployer.deploy(StandardERC20, "GBC Token","GBC", "2000");
};
