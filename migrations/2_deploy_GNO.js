/* global artifacts */
/* eslint no-undef: "error" */
const Math = artifacts.require('Math')
const TokenGNO = artifacts.require('TokenGNO')

const INITIAL_TOKEN_AMOUNT = 100000 // 100K

module.exports = function (deployer) {
  return Math
    .deployed()
    .then(math => {
      return deployer.link(Math, TokenGNO)
    })
    .then(() => {
      return deployer.deploy(TokenGNO, INITIAL_TOKEN_AMOUNT * 1e18)
    })
}
