https://eth-goerli.g.alchemy.com/v2/K92BhwfVAp4s45qyN2uuS7ONP4JTcm4D

require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.0',
  networks: {
      goerli: {
        url: 'https://eth-goerli.g.alchemy.com/v2/K92BhwfVAp4s45qyN2uuS7ONP4JTcm4D',
        accounts: ['e028908c58dc7fca7643ce51a0ca16ab05066fec561ff96aba87588f530ac3a6']
      }
  }
};
