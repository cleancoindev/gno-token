/* global artifacts, web3 */
/* eslint no-undef: "error" */

const deployDependencies = require('../src/migrations-truffle-5/2_DEV_migrate_dependencies')

module.exports = function (deployer, network, accounts) {
  return deployDependencies({
    artifacts,
    deployer,
    network,
    accounts,
    web3
  })
}
