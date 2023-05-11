const multisender = artifacts.require("multisender");

module.exports = function (deployer) {
  deployer.deploy(multisender);
};
