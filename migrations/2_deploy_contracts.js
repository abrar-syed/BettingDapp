var Betting = artifacts.require("./Betting.sol");
module.exports = async function(deployer){
  return await deployer.deploy(Betting);
}
