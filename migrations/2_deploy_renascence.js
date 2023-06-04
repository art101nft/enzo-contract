var Enzo = artifacts.require("Enzo");

module.exports = function(deployer) {
  if (deployer.network == 'mainnet') {
    console.log(`[+] Deploying mainnet contract`);
  } else {
    console.log(`[+] Deploying testnet contract`);
  }
  deployer.deploy(Enzo);
};