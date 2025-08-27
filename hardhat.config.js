require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    skale: {
      url: process.env.SKALE_RPC,
      accounts: [process.env.DEPLOYER_KEY],
    },
  },
};
