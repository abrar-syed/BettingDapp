var WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');
var ropstenPrivateKey = new Buffer("6678CC07DDE98136E485F02A6DF55EB31F2EDBF45944F0DA70708278351E8B57","hex");
var ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
var ropstenProvider = new WalletProvider(ropstenWallet,"https://ropsten.infura.io/v3/1a4b2546e0644cf6bcb504e77454aa84");
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    ropsten: {
      provider: ropstenProvider,
      gas: 4600000,
      network_id: 3
    }
  }
};